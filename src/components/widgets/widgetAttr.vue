<template>
  <el-form
    v-if="currSelectedWidget && Object.keys(currSelectedWidget).length > 0"
  >
    <el-form-item label="字段标识">
      <el-input v-model="currSelectedWidget.key"></el-input>
    </el-form-item>
    <el-form-item label="字段名称">
      <el-input v-model="currSelectedWidget.name"></el-input>
    </el-form-item>
     <el-form-item v-for="(widgetAttr,idx) in Object.keys(currSelectedWidget.options)" :key="idx"  :label="getAttr(widgetAttr)">
        <el-input  v-if="widgetAttr === 'defaultValue' && currSelectedWidget.type !== 'checkbox'"  v-model="currSelectedWidget.options[widgetAttr]"></el-input>   
        <el-input  v-if="widgetAttr === 'placeholder'"  v-model="currSelectedWidget.options[widgetAttr]"></el-input>  
        <el-checkbox-group  v-if="widgetAttr === 'defaultValue' && currSelectedWidget.type === 'checkbox'"  v-model="currSelectedWidget.options[widgetAttr]">
        <draggable
          tag="ul"
          :list="currSelectedWidget.options.options"
          v-bind="{
            group: { name: 'options' },
            ghostClass: 'ghost',
            handle: '.drag-item',
          }"
          handle=".drag-item"
          animation="250"
        >
          <li
            v-for="(item, index) in currSelectedWidget.options.options"
            :key="index"
          >
            <el-checkbox
              :label="item.label"
              :value="item.value"
              style="margin-right: 5px;"
            >
              <el-input
                size="mini"
                v-model="item.value"
                style="width:60px"
              ></el-input>
              <el-input
                size="mini"
                v-model="item.label"
                style="width:60px"
              ></el-input>
            </el-checkbox>
            <i
              class="drag-item"
              style="font-size: 16px;margin: 0 5px;cursor: move;"
              >拖过<i class="iconfont icon-icon_bars"></i
            ></i>
            <el-button
              circle
              plain
              type="danger"
              size="mini"
              icon="el-icon-minus"
              style="padding: 4px;margin-left: 5px;"
            ></el-button>
          </li>
        </draggable>
      </el-checkbox-group>
    </el-form-item> 
  </el-form>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["currSelectedWidget"],
  components: {
    draggable,
  },
  methods: {
      getAttr(widgetAttr) {
          const attrNameMap = {
              key:'字段标识',
              name:'字段名称',
              defaultValue:'默认值',
              placeholder: '占位内容'
          }
          return attrNameMap[widgetAttr]
      }
  },
};
</script>

<style lang="scss" scoped></style>
