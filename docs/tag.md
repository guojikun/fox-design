# Tag 标签

用于标记和选择。

## 基本用法

<div class="mt-20">
    <fox-tag type="primary">标签 1</fox-tag>
    <fox-tag type="success">标签 2</fox-tag>
    <fox-tag type="warning">标签 3</fox-tag>
    <fox-tag type="danger">标签 4</fox-tag>
    <fox-tag type="info">标签 5</fox-tag>
</div>

```html
<fox-tag type="primary">标签 1</fox-tag>
<fox-tag type="success">标签 2</fox-tag>
<fox-tag type="warning">标签 3</fox-tag>
<fox-tag type="danger">标签 4</fox-tag>
<fox-tag type="info">标签 5</fox-tag>
```

## 可移除标签

<div class="mt-20">
    <fox-tag
        v-for="tag in tags"
        :key="tag.type"
        :type="tag.type"
        closed
        @close="handleClose(tag.name)"
    >
        {{ tag.name }}
    </fox-tag>
</div>

```vue
<template>
    <div>
        <fox-tag v-for="tag in tags" :key="tag.type" :type="tag.type" closable @close="handleClose(tag.name)">
            {{ tag.name }}
        </fox-tag>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tags: [
                { name: "标签一", type: "primary" },
                { name: "标签二", type: "success" },
                { name: "标签四", type: "warning" },
                { name: "标签五", type: "danger" },
                { name: "标签三", type: "info" },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
    },
};
</script>
```

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="mt-20">
    <fox-tag size="large" closable>大型标签</fox-tag>
    <fox-tag size="default" closable>默认标签</fox-tag>
    <fox-tag size="small" closable>小型标签</fox-tag>
    <fox-tag size="mini" closable>超小标签</fox-tag>
    <p>
        额外的尺寸：large、small、mini，通过设置size属性来配置它们。
    </p>
</div>

```html
<div>
    <fox-tag size="large" closable>大型标签</fox-tag>
    <fox-tag size="default" closable>默认标签</fox-tag>
    <fox-tag size="small" closable>小型标签</fox-tag>
    <fox-tag size="mini" closable>超小标签</fox-tag>
</div>
```

## 不同主题</p>

Tag 组件提供了三个不同的主题：dark、light 和 plain

<div>
    <div>
        <fox-button type="text" size="small">Dark </fox-button>
        <fox-tag theme="dark" type="primary">标签 1</fox-tag>
        <fox-tag theme="dark" type="success">标签 2</fox-tag>
        <fox-tag theme="dark" type="warning">标签 3</fox-tag>
        <fox-tag theme="dark" type="danger">标签 4</fox-tag>
        <fox-tag theme="dark" type="info">标签 5</fox-tag>
    </div>
    <div class="mt-20">
        <fox-button type="text" size="small">Plain</fox-button>
        <fox-tag theme="plain" type="primary">标签 1</fox-tag>
        <fox-tag theme="plain" type="success">标签 2</fox-tag>
        <fox-tag theme="plain" type="warning">标签 3</fox-tag>
        <fox-tag theme="plain" type="danger">标签 4</fox-tag>
        <fox-tag theme="plain" type="info">标签 5</fox-tag>
    </div>
    <p slot="description">
        通过设置
        <code class="code">theme</code>
        属性来改变主题，默认为
        <code class="code">light</code>
    </p>
</div>

```html
<div>
    <fox-button type="text" size="small">Dark </fox-button>
    <fox-tag theme="dark" type="primary">标签 1</fox-tag>
    <fox-tag theme="dark" type="success">标签 2</fox-tag>
    <fox-tag theme="dark" type="warning">标签 3</fox-tag>
    <fox-tag theme="dark" type="danger">标签 4</fox-tag>
    <fox-tag theme="dark" type="info">标签 5</fox-tag>
</div>
<div class="mt-20">
    <fox-button type="text" size="small">Plain</fox-button>
    <fox-tag theme="plain" type="primary">标签 1</fox-tag>
    <fox-tag theme="plain" type="success">标签 2</fox-tag>
    <fox-tag theme="plain" type="warning">标签 3</fox-tag>
    <fox-tag theme="plain" type="danger">标签 4</fox-tag>
    <fox-tag theme="plain" type="info">标签 5</fox-tag>
</div>
```

<script>
export default {
    data() {
        return {
            props: [
                {
                    parameter: 'type',
                    explain: '类型',
                    type: 'String',
                    optionalValue: 'success/info/warning/danger',
                    defaultValue: '-',
                },
                {
                    parameter: 'size',
                    explain: '尺寸',
                    type: 'String',
                    optionalValue: 'large / small / mini',
                    defaultValue: '-',
                },
                {
                    parameter: 'theme',
                    explain: '主题',
                    type: 'String',
                    optionalValue: 'dark / light / plain',
                    defaultValue: 'light',
                },
            ],
            events: [
                {
                    name: 'click',
                    explain: '点击 Tag 时触发的事件',
                    args: '-',
                },
                {
                    name: 'close',
                    explain: '关闭 Tag 时触发的事件',
                    args: '-',
                },
            ],
            tags: [
                { name: '标签一', type: 'primary' },
                { name: '标签二', type: 'success' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' },
                { name: '标签三', type: 'info' },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
    },
};
</script>
