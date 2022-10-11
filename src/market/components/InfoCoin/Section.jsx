import { Chart, FirstData, Progress, SecondData } from "./";


export const Section = ({info}) => {


  return (
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 px-3">
                            <FirstData info={info}/>
                            <Progress info={info}/>
                            <SecondData info={info}/>
                        </div>
                    </div>
                <Chart info={info}/>
                </div>
            </div>
        </div>
  )
}
