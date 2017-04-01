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
var games_service_1 = require("../games.service");
var ListComponent = (function () {
    // Constructor Method ----------------------------
    function ListComponent(_gamesService) {
        this._gamesService = _gamesService;
        this.games = new Array();
    }
    // Methods ---------------------------------------
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gamesService.list().subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
    };
    ListComponent.prototype.showConfirm = function () {
        if (!confirm("Are you sure?")) {
            event.preventDefault();
            window.location.assign("/games");
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/games/list/list.template.html',
        providers: [games_service_1.GamesService]
    }),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map