import CollapseItem from "./src/collapse-item.vue";

CollapseItem.install = vue => {
    vue.component(`fox${CollapseItem.name}`, CollapseItem);
};

export default CollapseItem;
