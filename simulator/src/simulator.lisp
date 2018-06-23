(in-package :spinor.simulator)

(defgeneric u (gate &rest qubits)
  (:method (gate &rest qubits)
    (list gate qubits)))

(defun z-val (qubit)
  (mgl-mat:mref (matrix qubit) 0 2))

(defgeneric o (gate qubit)
  (:method ((gate gate-observe) (qubit qubit))
    (let ((val (z-val qubit)))
      (cond ((= (floor (* 100 val)) 0) (random 2))
            ((> val 0) 1)
            ((< val 0) 0)))))
