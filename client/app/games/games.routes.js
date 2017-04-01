"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var games_component_1 = require("./games.component");
// include sub components
var list_component_1 = require("./list/list.component");
var edit_component_1 = require("./edit/edit.component");
exports.GamesRoutes = [{
        path: '',
        component: games_component_1.GamesComponent,
        children: [
            { path: 'games', component: list_component_1.ListComponent },
            { path: 'games/:id', component: edit_component_1.EditComponent }
        ]
    }];
//# sourceMappingURL=games.routes.js.map