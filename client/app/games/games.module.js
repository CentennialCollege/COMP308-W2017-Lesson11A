"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular requirements
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
// Games Module requirements
var games_routes_1 = require("./games.routes");
var games_component_1 = require("./games.component");
// Sub Components
var list_component_1 = require("./list/list.component");
var edit_component_1 = require("./edit/edit.component");
// Service
var games_service_1 = require("./games.service");
var GamesModule = (function () {
    function GamesModule() {
    }
    return GamesModule;
}());
GamesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule.forChild(games_routes_1.GamesRoutes), http_1.HttpModule
        ],
        declarations: [
            games_component_1.GamesComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent
        ],
        providers: [
            games_service_1.GamesService
        ],
        exports: [
            games_component_1.GamesComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent
        ]
    })
], GamesModule);
exports.GamesModule = GamesModule;
//# sourceMappingURL=games.module.js.map