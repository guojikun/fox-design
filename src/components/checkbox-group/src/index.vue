<template>
    <div class="fox-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import Emitter from "@/mixins/emitter.js";
export default {
    name: "CheckboxGroup",
    mixins: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            curValue: this.value,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.curValue = this.value;
        },
        addValue(val) {
            this.curValue.push(val);
            this.$emit("change", this.curValue);
            this.dispatch("FormItem", "on-form-change", this.curValue);
        },
        removeValue(val) {
            const index = this.curValue.indexOf(val);
            this.curValue.splice(index, 1);
            this.$emit("change", this.curValue);
            this.dispatch("FormItem", "on-form-change", this.curValue);
        },
    },
    watch: {
        value(val) {
            this.curValue = val;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/style/common/var.scss";

.fox-checkbox-group {
    background-color: #fff;
}
</style>
