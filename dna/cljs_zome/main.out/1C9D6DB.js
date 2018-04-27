goog.provide('cljs.nodejs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_((function() { 
var G__4803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__4803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4804__i = 0, G__4804__a = new Array(arguments.length -  0);
while (G__4804__i < G__4804__a.length) {G__4804__a[G__4804__i] = arguments[G__4804__i + 0]; ++G__4804__i;}
  args = new cljs.core.IndexedSeq(G__4804__a,0,null);
} 
return G__4803__delegate.call(this,args);};
G__4803.cljs$lang$maxFixedArity = 0;
G__4803.cljs$lang$applyTo = (function (arglist__4805){
var args = cljs.core.seq(arglist__4805);
return G__4803__delegate(args);
});
G__4803.cljs$core$IFn$_invoke$arity$variadic = G__4803__delegate;
return G__4803;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__4806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__4806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4807__i = 0, G__4807__a = new Array(arguments.length -  0);
while (G__4807__i < G__4807__a.length) {G__4807__a[G__4807__i] = arguments[G__4807__i + 0]; ++G__4807__i;}
  args = new cljs.core.IndexedSeq(G__4807__a,0,null);
} 
return G__4806__delegate.call(this,args);};
G__4806.cljs$lang$maxFixedArity = 0;
G__4806.cljs$lang$applyTo = (function (arglist__4808){
var args = cljs.core.seq(arglist__4808);
return G__4806__delegate(args);
});
G__4806.cljs$core$IFn$_invoke$arity$variadic = G__4806__delegate;
return G__4806;
})()
);

return null;
});
