import { useEffect, useState } from "react";

import { Porcentage } from "./Porcentage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useFetchChartDataOHLC, useFetchChartData, useCoinsStore, useInfoCoinStore } from "../../hooks/";
import { ChartMarket } from "./Chart/ChartMarket";
import { ChartMarketOHLC } from "./Chart/ChartMarketOHLC";
import { LoaderChart } from "./Chart/LoaderChart";



export const Chart = ({info}) => {

    
    
    
    const { data, isLoading} = useFetchChartData();
    const { dataOHLC, isLoadingOHLC } = useFetchChartDataOHLC();
    const { isMode } = useCoinsStore();
    const { 
        isChart,isChartTime,isCurrencyCoversor,
        onChangeChartTime, onChangeChart,
    } = useInfoCoinStore()
    
    const [ typeChart, setTypeChart ] = useState(isChart);
    const [typeChartTime, setTypeChartTime] = useState(isChartTime);

    useEffect(() => {

        setTypeChartTime(isChartTime)
    
    }, [isChartTime]);

    useEffect(() => {

      setTypeChart(isChart)
    
    }, [isChart]);


    return (
        <div className="row">
            <div className="col-md-12 py-3">
                <div className="p-2  text-center">
                    <span className={`fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                        {
                            `${info.name} Price Chart `
                        }
                        <span className={`p-0 text-uppercase fw-semibold ${(isMode ? 'text-white' : 'text-black')}`}>
                            {
                                `(${info.symbol}/USD)`
                            }
                        </span>
                    </span>
                </div>
                <div className='text-end py-2'>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio1" 
                            autoComplete="off" 
                            checked={( typeChartTime === "1")}
                            onClick={ e => { onChangeChartTime('1') }} 
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio1">
                            24h
                        </label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio2" 
                            autoComplete="off" 
                            checked={( typeChartTime === "7")}
                            onClick={ e => { onChangeChartTime('7') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio2">
                            7d
                        </label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio3" 
                            autoComplete="off" 
                            checked={( typeChartTime === "14")}
                            onClick={ e => { onChangeChartTime('14') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio3">
                            14d
                        </label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio4" 
                            autoComplete="off" 
                            checked={( typeChartTime === "30")}
                            onClick={ e => { onChangeChartTime('30') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio4">
                            30d
                        </label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio6" 
                            autoComplete="off" 
                            checked={( typeChartTime === "180")}
                            onClick={ e => { onChangeChartTime('180') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio6">
                            180d
                        </label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio7" 
                            autoComplete="off" 
                            checked={( typeChartTime === "365")}
                            onClick={ e => { onChangeChartTime('365') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio7">
                            1y
                        </label>

                    </div>
                </div>
                <div className="text-end">
                    <div className="d-inline">
                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio8" 
                            autoComplete="off" 
                            checked={( typeChartTime === "max")}
                            onClick={ e => { onChangeChartTime('max') }}
                        >
                        </input>
                        <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio8">
                            Max
                        </label>
                    </div>
                    <div className='d-inline ms-2'>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            
                            <input 
                                type="radio" 
                                className="btn-check"
                                name="btnradio2" 
                                id="btnradio9" 
                                autoComplete="off" 
                                checked={( typeChart === "line")}
                                onClick={ e => { onChangeChart('line') }} 
                            ></input>
                            <label className={`btn ${( isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio9">
                                <FontAwesomeIcon icon={ faChartLine } />
                            </label>

                            
                            <input 
                                type="radio" 
                                className="btn-check"
                                name="btnradio2" 
                                id="btnradio10" 
                                autoComplete="off" 
                                checked={( typeChart === "candlestick")}
                                onClick={ e => { onChangeChart('candlestick') }}
                            ></input>
                            <label className={`btn ${(isMode ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm`} htmlFor="btnradio10">
                                <FontAwesomeIcon icon={ faChartSimple }  />
                            </label>
                        </div>
                    </div>
                </div>
                    {
                        ( isLoading || isLoadingOHLC ) ? 
                            <LoaderChart />
                        : 
                        <div >
                            {
                                ( typeChart === 'line' ) ?
                                <ChartMarket data={ data } />
                                :
                                <ChartMarketOHLC dataOHLC={ dataOHLC }/>
                            }
                        </div>
                    }
                    
                    
                <Porcentage info={ info }/>
            </div>
        </div>
    )
}
