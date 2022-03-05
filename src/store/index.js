import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {id: 1, title: "FIFA 22", price: "3485", img: "fifa22", discount: "57", description: "FIFA 22 — 29-ая по счёту компьютерная игра из серии FIFA в жанре Спортивный симулятор футбольного симулятора, разработанная компаниями EA Vancouver под издательством Electronic Arts. На ПК, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S и Nintendo Switch игра уже вышла в октябре 2021 года."},
            {id: 2, title: "Elite dangerous", price: "2000", img: "ed", discount: null},
            {id: 3, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 4, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 5, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 6, title: "Fallout 76", price: "3000", img: "fallout76", discount: "10"},
            {id: 7, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 8, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 9, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 10, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 11, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 12, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 13, title: "God of war", price: "6000", img: "gow", discount: "38"},
            {id: 14, title: "GTA 5", price: "600", img: "gta5", discount: null},
            {id: 15, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 16, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 17, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 18, title: "RDR 2", price: "2600", img: "rdr2", discount: "5"},
            {id: 19, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 20, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 21, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 22, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 23, title: "Test", price: "1600", img: null, discount: "10"},
            {id: 24, title: "Test", price: "1600", img: null, discount: "10"},
        ],
        productCols: 2
    },
    getters: {

    },
    mutations: {

    },
    action: {

    }
});
