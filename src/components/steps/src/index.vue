<template>
    <div :class="['fox-steps', `fox-steps-${direction}`]">
        <slot></slot>
    </div>
</template>

<script>
import { findComponentsDownward } from "@/utils/findComponent.js";
export default {
    name: "Steps",
    props: {
        active: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: "process",
            validator(val) {
                const types = ["wait", "process", "finish", "error"];
                return types.includes(val);
            },
        },
        finishStatus: {
            type: String,
            default: "finish",
            validator(val) {
                const types = ["wait", "process", "finish", "error", "success"];
                return types.includes(val);
            },
        },
        direction: {
            type: String,
            default: "horizontal",
            validator(val) {
                const types = ["horizontal", "vertical"];
                return types.includes(val);
            },
        },
    },
    mounted() {
        const children = findComponentsDownward(this, "Step");
        children.map((cur, i) => {
            cur.updateIndex(i + 1);
        });
    },
};
</script>
<style lang="scss">
.fox-steps {
    display: flex;
    width: 100%;
    font-size: 0;
    line-height: 1.5;
    &-horizontal {
        white-space: nowrap;
    }
    &-vertical {
        height: 100%;
        flex-direction: column;
    }
}
</style>
