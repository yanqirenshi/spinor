(defpackage spinor.simulator.matrix
  (:use #:cl)
  (:export #:make-matrix
           #:make-matrix-0>
           #:make-matrix-1>
           #:make-matrix-rotate-x
           #:make-matrix-rotate-y
           #:make-matrix-rotate-z))
(in-package :spinor.simulator.matrix)

(defun make-matrix (list)
  (mgl-mat:make-mat (if (listp (first list))
                        (list (length list)
                              (length (first list)))
                        (list (length list)))
                    :initial-contents list
                    :ctype :float))

(defun make-matrix-0> ()
  (make-matrix '(0.0 0.0 1.0)))

(defun make-matrix-1> ()
  (make-matrix '(0.0 0.0 -1.0)))

(defun make-matrix-rotate-x (rad)
  (let* ((cos (cos rad))
         (sin (sin rad))
         (-sin (* -1 sin)))
    (make-matrix `((1.0 0.0   0.0)
                   (0.0 ,cos  ,sin)
                   (0.0 ,-sin ,cos)))))


(defun make-matrix-rotate-y (rad)
  (let* ((cos (cos rad))
         (sin (sin rad))
         (-sin (* -1 sin)))
    (make-matrix `((,cos  0.0 ,-sin)
                   (0.0   1.0 0.0)
                   (,sin 0.0 ,cos)))))

(defun make-matrix-rotate-z (rad)
  (let* ((cos (cos rad))
         (sin (sin rad))
         (-sin (* -1 sin)))
    (make-matrix `((,cos ,sin 0.0)
                   (,-sin ,cos  0.0)
                   (0.0  0.0   1.0)))))
