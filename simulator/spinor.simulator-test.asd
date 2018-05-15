#|
  This file is a part of spinor.simulator project.
|#

(defsystem "spinor.simulator-test"
  :defsystem-depends-on ("prove-asdf")
  :author ""
  :license ""
  :depends-on ("spinor.simulator"
               "prove")
  :components ((:module "tests"
                :components
                ((:test-file "spinor.simulator"))))
  :description "Test system for spinor.simulator"

  :perform (test-op (op c) (symbol-call :prove-asdf :run-test-system c)))
