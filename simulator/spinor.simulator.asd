#|
  This file is a part of spinor.simulator project.
|#

(defsystem "spinor.simulator"
  :version "0.1.0"
  :author ""
  :license ""
  :depends-on ()
  :components ((:module "src"
                :components
                ((:file "matrix")
                 (:file "rotate")
                 (:file "package")
                 (:module "class" :components ((:file "gate")
                                               (:file "qubit")))
                 (:file "simulator"))))
  :description ""
  :long-description
  #.(read-file-string
     (subpathname *load-pathname* "README.markdown"))
  :in-order-to ((test-op (test-op "spinor.simulator-test"))))
