!function(t){"use strict";function o(t,o){if(o=o||function(){},this._dbName=t,!localStorage[t]){localStorage[t]=JSON.stringify({todos:[]})}o.call(this,JSON.parse(localStorage[t]))}o.prototype.find=function(a,t){if(t){var o=JSON.parse(localStorage[this._dbName]).todos;t.call(this,o.filter(function(t){for(var o in a)if(a[o]!==t[o])return!1;return!0}))}},o.prototype.findAll=function(t){(t=t||function(){}).call(this,JSON.parse(localStorage[this._dbName]).todos)},o.prototype.save=function(t,o,a){var e=JSON.parse(localStorage[this._dbName]),i=e.todos;o=o||function(){};var r=this.generateId();if(a){for(var l=0;l<i.length;l++)if(i[l].id===a){for(var s in t)i[l][s]=t[s];break}localStorage[this._dbName]=JSON.stringify(e),o.call(this,i)}else t.id=parseInt(r),i.push(t),localStorage[this._dbName]=JSON.stringify(e),o.call(this,[t])},o.prototype.generateId=function(){var t=JSON.parse(localStorage[this._dbName]).todos;if(0<t.length){var o=t[t.length-1].id;self.id=o+1}else self.id=1;return self.id},o.prototype.remove=function(t,o){for(var a,e=JSON.parse(localStorage[this._dbName]),i=e.todos,r=0;r<i.length;r++)i[r].id==t&&(a=i[r].id);for(r=0;r<i.length;r++)i[r].id==a&&i.splice(r,1);localStorage[this._dbName]=JSON.stringify(e),o.call(this,i)},o.prototype.drop=function(t){var o={todos:[]};localStorage[this._dbName]=JSON.stringify(o),t.call(this,o.todos)},t.app=t.app||{},t.app.Store=o}(window);