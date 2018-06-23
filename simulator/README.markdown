# Spinor.Simulator

ゲート型 量子コンピューターのシュミレータです。

ゲート型 量子コンピューターを理解するために作っています。

## Usage

```lisp
(in-package :spinor.simulator)

;; 観測(observe)
(let ((qubit (make-instance 'qubit))
      (deg 180))
  (setf (matrix qubit) (rotate-y (matrix qubit) :deg deg))
  (o (make-instance 'gate-observe)
     qubit))
```

## Installation

```lisp
(ql:quickload :spinor.simulator)
```

## Packages

| Name                    | Description                                         |
|-------------------------|------------------------------------------|
| spinor.simulator        | ブロッホ球 と ゲートを扱う。             |
| spinor.simulator.rotate | ベクトルを回転させるためのユーティリティ |
| spinor.simulator.matrix | マトリックス計算するためのユーティリティ |

## Classes

|       |                     |
|-------|---------------------|
| Bloch | bloch-sphere        |
| 〃    | qubit               |
|-------|---------------------|
| Gate  | qubit-gate          |
| 〃    | single-qubit-qugate |
| 〃    | multi-qubit-qugate  |
| 〃    | gate-pauli-x        |
| 〃    | gate-pauli-y        |
| 〃    | gate-pauli-z        |
| 〃    | gate-hadamard       |
| 〃    | gate-phase-shift    |

## spinor.simulator.matrix

### Function: make-matrix
マトリックスを作成します。

`mgl-mat:make-mat` で作成します。

### Function: make-matrix-0>

`0>`の状態のマトリックスを返します。

```
make-matrix-0> ⇒ matrix
```


### Function: make-matrix-1>

`1>`の状態のマトリックスを返します。

```
make-matrix-1> ⇒ matrix
```

### Function: MAKE-MATRIX-ROTATE-X

```
make-matrix-rotate-x rad ⇒ matrix
```

### Function: MAKE-MATRIX-ROTATE-Y

```
make-matrix-rotate-y rad ⇒ matrix
```

### Function: MAKE-MATRIX-ROTATE-Z

```
make-matrix-rotate-z rad ⇒ matrix
```

## spinor.simulator.rotate

### deg2rad

```
deg2rad rad
```

### rotate-core

vector に matrix を掛けた matrix を返します。

```
rotate-core vector matrix ⇒ matrix
```

### rotate-x

```
rotate-x vector &key deg
```

### rotate-y

```
rotate-y vector &key deg
```

### rotate-z

```
rotate-z vector &key deg
```
