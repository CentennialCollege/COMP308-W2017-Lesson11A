"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Router, ActivatedRoute } from '@angular/router';
var router_1 = require("@angular/router");
var games_service_1 = require("../games.service");
var EditComponent = (function () {
    // Constructor Method ----------------------------
    function EditComponent(_router, 
        //private _route: ActivatedRoute,
        _gamesService) {
        this._router = _router;
        this._gamesService = _gamesService;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.paramsObserver = this._route.params.subscribe(params => {
        //let gameId = params['id'];
        var gameId = '58964b1c4108ad0d0657f811'; // testing
        this._gamesService.read(gameId).subscribe(function (game) {
            _this.game = game;
        }, function (error) { return _this._router.navigate(['/games']); });
        //});
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: 'app/games/edit/edit.template.html',
        providers: [games_service_1.GamesService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        games_service_1.GamesService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map