<template>
  <div class="home">
    <div class="widgetsWrap left">
      <ul>
        <draggable v-model="basicWidgets" v-bind="draggableConf">
          <li v-for="(widgetConf, idx) in basicWidgets" :key="idx">
            {{ widgetConf.name }}
          </li>
        </draggable>
      </ul>
    </div>
    <div class="widgetFormWrap mid">
      <widgetForm
        :selectedWidgetList="selectedWidgetList"
        :currSelectedWidget.sync="currSelectedWidget"
      />
    </div>
    <div class="widgetAttrWrap right">
      <widgetAttr :currSelectedWidget="currSelectedWidget" />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { basicWidgets } from "@/components/widgets/config.js";
import widgetForm from "@/components/widgets/widgetForm";
import widgetAttr from "@/components/widgets/widgetAttr";
export default {
  name: "Home",
  components: {
    draggable,
    widgetForm,
    widgetAttr,
  },
  data() {
    return {
      basicWidgets,
      selectedWidgetList: {
        items: [],
      },
      currSelectedWidget: {},
      draggableConf: {
        group: { name: "widget", pull: "clone", put: false },
        sort: false,
        ghostClass: "ghost",
      },
    };
  },
  methods: {
    loadWidgets() {
      this.basicWidgets = this.basicWidgets.map((item) => ({ ...item }));
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  min-height: 100vh;
  box-sizing: border-box;
  .widgetsWrap {
    width: 220px;
  }
  .widgetFormWrap {
    flex: 1;
    margin: 0 12px;
    border: 1px solid #e3e3e3;
  }
  .widgetAttrWrap {
    width: 220px;
  }
}
</style>
