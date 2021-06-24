import React from "react";

import { Pie } from '@ant-design/charts' ;
import {PieConfig} from "@ant-design/charts/lib/Pie";
import {RepoCommitChartData} from "../models/RepoCommitChartData";

//React.Componen


const RepoCommitsStats : React.FC<{data:RepoCommitChartData[]}> = ({data}) => {


    var config:PieConfig = {
        appendPadding : 30 ,
        data : data,
        angleField : 'value' ,
        colorField : 'type' ,
        radius : 0.8 ,
        label : { type : 'outer' , content : '{name} {percentage}' } ,

      /*  label : {
            type : 'outer' ,
            content : '{name} {percentage}' ,
        }, */
   /*     label : {
            type : 'inner' ,
            offset : '-30%' ,
            content : function content ( _ref ) {
                var percent = _ref . percent ;
                return '' . concat ( ( percent * 100 ) . toFixed ( 0 ) , '%' ) ;
            } ,
            style : {
                fontSize : 14 ,
                textAlign : 'center' ,
            } ,
        },*/
        interactions : [ { type : 'element-active' } ] ,
    } ;
    return <Pie { ... config }   /> ;
} ;

export default RepoCommitsStats ;


