import { useCoinsStore } from "../../hooks";


export const Footer = ({info}) => {

    const { isMode } = useCoinsStore();

    const description = info.description
    function createMarkup() {
        return {__html: description};
      }


    return (
        <footer className="row">
            <div className="col-md-12 ">
                <div className={`mt-2 ${(isMode ? 'text-light' : 'text-dark')}`}>
                    <h5>
                        {
                        `Description ${info.name}`
                        }
                    </h5>
                    {/* <p className="">
                        {
                        `${info.description}`
                        }
                    </p> */}
                    <p dangerouslySetInnerHTML={createMarkup()}>
                        {/* {
                        `${info.description}`
                        } */}
                    </p>
                </div>
            </div>
        </footer>
    )
}
