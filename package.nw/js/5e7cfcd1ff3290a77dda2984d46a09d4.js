'use strict';!function(require,directRequire){const a=require('react'),b=require('./common/locales/index.js'),c=require('./da7c31daaf542cf1796023d8e344b98a.js'),d='notification';module.exports=class extends a.Component{constructor(a){super(a),this.bbsChange=()=>{this.props.updateIDESetting(d,'bbs',!this.state.bbs),this.setState({bbs:!this.state.bbs}),c(this.state.bbs?'setting_close_bbs':'setting_open_bbs')},this.sysChange=()=>{this.props.updateIDESetting(d,'sys',!this.state.sys),this.setState({sys:!this.state.sys}),c(this.state.sys?'setting_close_system':'setting_open_system')},this.alarmChange=()=>{this.props.updateIDESetting(d,'alarm',!this.state.alarm),this.setState({alarm:!this.state.alarm})},this.state={bbs:a.settings.bbs,sys:a.settings.sys,alarm:a.settings.alarm}}getSetting(){return{bbs:this.state.bbs,sys:this.state.sys,alarm:this.state.alarm}}render(){return a.createElement('div',{className:'setting-theme ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{htmlFor:'',className:'ui-form-label'},b.config.SETTING_NOTIFICATION_SETTING),a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.sysChange},a.createElement('i',{className:this.state.sys?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},b.config.SETTING_NOTIFICATION_ENABLE_SYSTEM)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.bbsChange},a.createElement('i',{className:this.state.bbs?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},b.config.SETTING_NOTIFICATION_ENABLE_BBS)),a.createElement('label',{htmlFor:'',className:'ui-checkbox',onClick:this.alarmChange},a.createElement('i',{className:this.state.alarm?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},b.config.SETTING_NOTIFICATION_ENABLE_ALARM)))))}}}(require('lazyload'),require);