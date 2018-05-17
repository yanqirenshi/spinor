(defpackage spinor.simulator.rotate
  (:use #:cl
        #:spinor.simulator.matrix)
  (:import-from :mgl-mat
                #:gemm!)
  (:export #:deg2rad
           #:rotate-x
           #:rotate-y
           #:rotate-z))
(in-package :spinor.simulator.rotate)

(defun deg2rad (deg) (* deg (/ pi 180)))

(defun rotate-core (vector matrix)
  (gemm! 1.0
         vector matrix
         0.0
         (make-matrix '((0.0 0.0 0.0)))
         :m 1 :n 3 :k 3))

(defun rotate-x (vector &key (deg 90))
  (rotate-core vector (make-matrix-rotate-x (deg2rad deg))))

(defun rotate-y (vector &key (deg 90))
  (rotate-core vector (make-matrix-rotate-y (deg2rad deg))))

(defun rotate-z (vector &key (deg 90))
  (rotate-core vector (make-matrix-rotate-z (deg2rad deg))))
