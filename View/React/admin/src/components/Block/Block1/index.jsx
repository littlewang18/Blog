import React from 'react';
import {
    Chart,
    Interval,
    Axis,
    Coordinate,
    Interaction,
    getTheme
} from 'bizcharts'

import B1style from './index.module.css'
import { Card } from 'antd';

function Block1() {
         const data = [
             { item: 'c++', count: 40, percent: 0.4 },
             { item: 'go', count: 21, percent: 0.21 },
             { item: 'react', count: 17, percent: 0.17 },
             { item: '计算机网络', count: 13, percent: 0.13 },
             { item: '杂谈', count: 9, percent: 0.09 },
        ];

    const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + '%';
                    return val;
                },
            },
        };


    return (
        <Card className={B1style.block}>


        <Chart height={400} data={data} scale={cols} autoFit>
            <Coordinate type="theta" radius={0.75} />
            <Axis visible={false} />
            <Interval
                position="percent"
                adjust="stack"
                color="item"
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}

                state={{
                    selected: {
                        style: (t) => {
                            const res = getTheme().geometries.interval.rect.selected.style(t);
                            return { ...res }
                        }
                    }
                }}
            />
            <Interaction type='element-single-selected' />
        </Chart>
        </Card>
    )
}

export default Block1
