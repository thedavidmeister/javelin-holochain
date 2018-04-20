(set-env!
  :repositories [["jcenter" "https://jcenter.bintray.com/"]
                 ["clojars.org" "http://clojars.org/repo"]]
  :dependencies
  '[
    ; scaffolding...
    [org.clojure/clojure "1.10.0-alpha4"]
    [org.clojure/clojurescript "1.10.217"]
    [adzerk/boot-cljs "2.1.4"]
    [hoplon/javelin "3.9.0"]
    [hoplon/hoplon "7.3.0-SNAPSHOT"]
    [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]

    ; transitive dependencies...
    [doo "0.1.8"]

    ; everything else...
    [danielsz/boot-shell "0.0.1"]
    [thedavidmeister/hoplon-elem-lib "0.2.0"]
    [cljs-ajax "0.7.3"]]

  :source-paths #{"src"}
  ; adding to resource paths helps watch to fire
  :resource-paths #{"dna"})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[danielsz.boot-shell :refer [shell]])

(deftask front-dev
 "Build for local development."
 [a advanced-compilation? bool "Compile CLJS with advanced compilation"]
 (comp
  (hoplon)
  (watch)
  (speak
   :theme "woodblock")
  (cljs
   :optimizations (if advanced-compilation? :advanced :none)
   :compiler-options {})
  (target
   :dir #{"ui"})))
