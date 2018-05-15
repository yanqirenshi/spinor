(in-package :spinor.simulator)

(defclass qubit ()
  ((x :accessor x :initarg :x :initform 0)
   (y :accessor y :initarg :y :initform 0)
   (z :accessor z :initarg :z :initform -1)))

(defclass qugate () ())
(defclass gate-h (qugate) ())
(defclass gate-r (qugate) ())
(defclass gate-t (qugate) ())
(defclass gate-s (qugate) ())
