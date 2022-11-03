"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getCard = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.punkapi.com/v2/beers`);
    let content = yield response.json();
    for (let beer in content) {
        document.body.innerHTML += `
        <div class="card">
             <div class="id">${content[beer].id}</div>
             <div class="name">${content[beer].name}</div>
             <div class="tagline">${content[beer].tagline}</div>
             <div class="contain">
             <div class="image"><img src="${content[beer].image_url}"></div>
             <div class="description">${content[beer].description}</div>
             </div>
             <div class="first_brewed">${content[beer].first_brewed}</div>
         </div>
        `;
    }
    console.log(content);
});
getCard();
