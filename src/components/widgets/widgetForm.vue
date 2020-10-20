<template>
  <div class="widgetForm">
    <el-form size="small">
      <draggable
        v-model="selectedWidgetList.items"
        group="widget"
        @add="handleDraggableAdd"
        animation="100"
      >
        <el-form-item
          v-for="(widget, idx) in selectedWidgetList.items"
          :key="idx + widget.key"
          :label="widget.name"
          :class="{ active: widget.key === currSelectedWidget.key }"
          @click.native.stop="handleSelectWidget(idx)"
        >
          <template v-if="widget.type === 'input'">
            <el-input
              v-model="widget.options.defaultValue"
              :placeholder="widget.options.placeholder"
            ></el-input>
          </template>
          <template v-else-if="widget.type === 'checkbox'">
            <el-checkbox-group v-model="widget.options.defaultValue">
              <el-checkbox
                v-for="opt in widget.options.options"
                :key="idx + opt.label"
                :label="opt.label"
                :value="opt.value"
              ></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-form-item>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    selectedWidgetList: { type: Object, default: { items: [] } },
    currSelectedWidget: { type: Object, default: () => ({}) },
  },
  components: { draggable },
  methods: {
    handleDraggableEnd({ newIndex, oldIndex }) {
      console.log("handleDraggableEnd", newIndex, oldIndex);
    },
    handleDraggableAdd(evt) {
      const { newIndex } = evt;
      console.log("handleDraggableAdd", evt); //为拖拽到容器的元素添加唯一 key
      const key =
        this.selectedWidgetList.items[newIndex].type + "_" + Date.now();
        this.$set(this.selectedWidgetList.items, newIndex, {
          ...this.selectedWidgetList.items[newIndex],
          options: {
            ...this.selectedWidgetList.items[newIndex].options,
          },
          key,
        });
    },
    handleSelectWidget(idx) {
      console.log("idx", idx);
      this.$emit(
        "update:currSelectedWidget",
        this.selectedWidgetList.items[idx]
      );
    },
  },
};
</script>

<style lang="less" scoped>
.widgetForm {
  height: 100%;
  .el-form {
    height: 100%;
    & > div {
      height: 100%;
    }
    .widget-form-list {
      height: 100%;
    }
    .el-form-item.active {
      outline: 2px solid blue;
    }
  }
}
</style>
