(in-package :spinor.simulator)

(defclass qubit-gate () () (:documentation "super class of gate"))
(defclass single-qubit-qugate (qubit-gate) () (:documentation ""))
(defclass multi-qubit-qugate (qubit-gate) () (:documentation ""))

(defclass gate-pauli-x (single-qubit-qugate)
  ((matrix :accessor matrix :initarg :matrix :initform (make-matrix-rotate-x))))

(defclass gate-pauli-y (single-qubit-qugate)
  ((matrix :accessor matrix :initarg :matrix :initform (make-matrix-rotate-y))))

(defclass gate-pauli-z (single-qubit-qugate)
  ((matrix :accessor matrix :initarg :matrix :initform (make-matrix-rotate-z))))

(defclass gate-hadamard (single-qubit-qugate) ())

(defclass gate-phase-shift (single-qubit-qugate) ())

(defgeneric pass (gate &rest qubits)
  (:method ((gate single-qubit-qugate) &rest qubits)
    (list gate (first qubits))))

(defgeneric unitary-transformation (gate &rest qubits)
  (:method ((gate single-qubit-qugate) &rest qubits)
    (list gate (first qubits))))
