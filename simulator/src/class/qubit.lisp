(in-package :spinor.simulator)

(defclass bloch-sphere ()
  ((matrix :accessor matrix :initarg :matrix :initform (make-matrix-0>))))

(defclass qubit (bloch-sphere)
  ((error-rate :accessor error-rate :initarg :error-rate :initform 0.0)))
