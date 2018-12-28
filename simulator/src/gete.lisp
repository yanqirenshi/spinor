(defpackage spinor.simulator
  (:use #:cl
        #:spinor.simulator.matrix
        #:spinor.simulator.rotate))
(in-package :spinor.simulator)

(defmethod gate-pauli-x ((qubit qubit-so3)) qubit)
(defmethod gate-pauli-y ((qubit qubit-so3)) qubit)
(defmethod gate-pauli-z ((qubit qubit-so3)) qubit)
(defmethod gate-hadamard ((qubit qubit-so3)) qubit)

(defmethod gate-pauli-x ((qubit qubit-su2)) qubit)
(defmethod gate-pauli-y ((qubit qubit-su2)) qubit)
(defmethod gate-pauli-z ((qubit qubit-su2)) qubit)
(defmethod gate-hadamard ((qubit qubit-su2)) qubit)
