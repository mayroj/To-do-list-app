# To-do-list-app

Projet 8 - OC DA Frontend - [Reprenez et améliorez un projet existant](https://openclassrooms.com/projects/reprenez-et-ameliorez-un-projet-existant)

=======================================================================

Amélioration d'un projet existant de todo-list en vanillaJS.

Le projet comporte quelques bugs à __identifier et corriger__, quelques __optimisations__ possibles à intégrer.

Les tests unitaires sont à améliorer en utilisant le framework __Jasmine__ et optimisé à l’aide de tâches __gulp-uglify__.

Un audit de performance est attendu sur un site concurrent à notre application, la mise en évidence de certaines fonctionnalités intéressantes est attendue l'outil utilisé __Lighthouse Audit__ depuis la console Google Chrome.

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/ecran_todolist.png)


## _Etape 1 : Corrigez les bugs_

#### 1. bug 1 : faute de frappe dans [__controller.js__](./js/controller.js)

Controller.prototype.__addItem__ à la place de Controller.prototype.__adddItem__ 


	Controller.prototype.addItem = function (title) {
		var self = this;

		if (title.trim() === '') {
			return;
		}

		self.model.create(title, function () {
			self.view.render('clearNewTodo');
			self._filter(true);
		});
	};

#### 2. bug 2 : création des ID dans [__store.js__](./js/store.js)

Store.prototype.save
Store.prototype.generateId

> Quelques ameliorations du code dans la methode __save__. La variable newId fait appelle à une nouvelle function __generateId__.

	Store.prototype.save = function (updateData, callback, id) {
		var data = JSON.parse(localStorage[this._dbName]);
		var todos = data.todos;

		callback = callback || function () {};

	    var newId = this.generateId();        

		if (id) {
			for (var i = 0; i < todos.length; i++) {
				if (todos[i].id === id) {
					for (var key in updateData) {
						todos[i][key] = updateData[key];
					}
					break;
				}
			}

			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, todos);
		} else {

			updateData.id = parseInt(newId);
    
			todos.push(updateData);
			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, [updateData]);
		}
	};
    
> Générer un nouvel __identifiant unique__. Utilise le paramètre global self. Si aucun Id n'existe, il est égal à 1, sinon récupère le dernier todo sauvegardé dans localStorage et l'augmente + 1 pour finir retourne le identifiant.
    
    Store.prototype.generateId = function () {
    
        var todos = JSON.parse(localStorage[this._dbName]).todos;
        
        if (todos.length > 0) {
            var lastId = todos[todos.length - 1].id;
            self.id = lastId + 1;
        } else {
            self.id = 1;
        }      
        
        return self.id;
    };
    
#### 3. amélioration : [__controller.js__](./js/controller.js)

Controller.prototype.removeItem => la boucle forEach est inadaptée.

> Le console.log donne une mauvaise information, il convient de mettre le console.log après le render plutôt qu' avant et de surrpimer la boucle forEach inutile.

	Controller.prototype.removeItem = function (id) {
		var self = this;
		var items;
		self.model.read(function(data) {
			items = data;
		});

		self.model.remove(id, function () {
			self.view.render('removeItem', id);
			console.log("Element with ID: " + id + " has been removed.");
		});

		self._filter();
	};


## _Etape 2 : où sont les tests ?!_

Tests unitaires avec le framework[ __Jasmine__](https://github.com/jasmine/)

Pré-requis : 
* installer [NPM et NodeJs](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
* installer [ __Jasmine__](https://github.com/jasmine/jasmine/releases)

Télécharger [le dossier](https://github.com/mayroj/To-do-list-app) puis ouvrir dans votre navigateur le fichier __SpecRunner.html__ que vous trouverez en suivant le chemin suivant `../test/SpecRunner.html`

Pour voir plus en détails les tests aller dans le fichier [__ControllerSpec.js__](./test/ControllerSpec.js)

#### Tests suivants ajoutés :

> 1. #92 => test quand on affiche les todos de l'onglet active
    
    it('should show active entries', function () {
			// TODO: write test
			////////// ln 78 controller.js ////////////
            /*
			Controller.prototype.showActive = function () {
					var self = this;
					self.model.read({ completed: false }, function (data) {
						self.view.render('showEntries', data);
					});
				};
			*/
            var todo = {title: 'my todo', completed: false};
            setUpModel([todo]);
            
            subject.setView('#/active'); // définit la vue pour afficher les éléments actifs
            
            expect(model.read).toHaveBeenCalledWith({completed: false}, jasmine.any(Function)); // appelle la méthode model.read avec la valeur completed: false et la function comme parametre.
            
            expect(view.render).toHaveBeenCalledWith('showEntries', [todo]); // La méthode render montre ensuite les entrées et le tableau todo
            
            expect(todo.completed).toEqual(false); // La tâche complétée devrait toujours être fausse!
            
		});
	
> 2. #116 => test quand on affiche les todos de l'onglet completed
	
	it('should show completed entries', function () {
			// TODO: write test           
            /*
			/////////// ln 89 controller.js /////////////
			Controller.prototype.showCompleted = function () {
				var self = this;
				self.model.read({ completed: true }, function (data) {
					self.view.render('showEntries', data);
				});
			};
			*/
            var todo = {title: 'my todo', completed: true};
            setUpModel([todo]);
            
            subject.setView('#/completed'); // défini la vue pour afficher les éléments complets
            
            expect(model.read).toHaveBeenCalledWith({completed: true}, jasmine.any(Function));
            
            expect(view.render).toHaveBeenCalledWith('showEntries', [todo]);
            
            expect(todo.completed).toEqual(true);
		});


## _Etape 3 : optimisez la performance du site [todolistme.net](http://todolistme.net/)_

Ouvrir l' _audit de performance_ dans votre navigateur : [__audit de performance__](./documentation/todo-audit.md)


## _Etape 4 : améliorez le projet_

Ouvrir la _documentation technique_ dans votre navigateur : [__documentation technique__](./documentation/todo-documentation.md)

