import { useCoinsStore } from "../../hooks";


export const Footer = ({info}) => {

    const { isMode } = useCoinsStore();

    return (
        <footer className="row">
            <div className="col-md-12 ">
                <div className={`p-3 ${(isMode ? 'text-light' : 'text-dark')}`}>
                    <h5>
                        {
                        `Description ${info.name}`
                        }
                    </h5>
                    <p>
                        {
                        `${info.description}`
                        }
                    </p>
                </div>
            </div>
        </footer>
    )
}
