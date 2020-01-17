import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import DocsHeader from "../../components/doc-header/index";
import ToHome from "../../components/to-home/index";
import DataEntryRadio from "./radio/index";
import DataEntryCheckbox from "./checkbox/index";
import DataEntrySwitch from "./switch/index";
import DataEntryInput from "./input/index";
import DataEntryTextarea from "./textarea/index";
import DataEntrySearchBar from "./searchBar/index";
import DataEntryInputNumber from "./inputNumber/index";
import DataEntryRange from "./range/index";
import DataEntrySlider from "./slider/index";
import DataEntryRate from "./rate/index";
import DataEntryImagePicker from "./imagePicker/index";
import DataEntryPicker from "./picker/index";
import DataEntryPickerView from "./pickerView/index";
var _styleSheet = indexStyleSheet;
let DataEntry = class DataEntry extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="数据录入" desc="12 个组件"></DocsHeader>

                <View style={_styleSheet["doc-body"]}>

                    
                    <DataEntryRadio />

                    
                    <DataEntryCheckbox />

                    
                    <DataEntrySwitch />

                    
                    <DataEntryInput />

                    
                    <DataEntryTextarea />

                    
                    <DataEntrySearchBar />

                    
                    <DataEntryInputNumber />

                    
                    <DataEntryRange />

                    
                    <DataEntrySlider />

                    
                    <DataEntryRate />

                    
                    <DataEntryImagePicker />

                    
                    <DataEntryPicker />

                    
                    <DataEntryPickerView />
                </View>
            </View>;
  }
};
export { DataEntry as default };