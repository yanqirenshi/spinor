(in-package :spinor.simulator)

(defclass bloch-sphere ()
  ((matrix :accessor matrix :initarg :matrix :initform (make-matrix-0>))))

(defclass qubit (bloch-sphere)
  ((error-rate :accessor error-rate :initarg :error-rate :initform 0.0)))

(defclass qubit-so3 (qubit)
  ((x :accessor x :initarg :x :initform 0.0)
   (y :accessor y :initarg :y :initform 0.0)
   (z :accessor z :initarg :z :initform 1.0)))

(defclass qubit-su2 (qubit)
  ((alpha :accessor alpha :initarg :alpha :initform #C(0.0 1.0))
   (beta  :accessor beta  :initarg :beta  :initform 0.0)))
