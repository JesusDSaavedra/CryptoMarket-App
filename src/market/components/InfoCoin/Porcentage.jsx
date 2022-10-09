import { useCoinsStore } from "../../hooks";


export const Porcentage = ({info}) => {

    const { isMode } = useCoinsStore();

    return (
        <div className="mt-3 p-5">
            <table className={`table ${(isMode ? 'table-dark' : 'table-light')} table-striped table-bordered table-sm`}>
                <thead>
                    <tr>
                        <th className='text-center'>
                            <small>
                                1h
                            </small>
                        </th>
                        <th className='text-center'>
                            <small>
                                24h
                            </small>
                        </th>
                        <th className='text-center'>
                            <small>
                                7d
                            </small>
                        </th>
                        <th className='text-center'>
                            <small>
                                14d
                            </small>
                        </th>
                        <th className='text-center'>
                            <small>
                                30d
                            </small>
                        </th>
                        <th className='text-center'>
                            <small>
                                1y
                            </small>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={`text-center ${(info.porcentage1h > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage1h === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage1h.toFixed(1))}%`
                                }
                            </small>
                        </td>
                        <td className={`text-center ${(info.porcentage24h > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage24h === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage24h.toFixed(1))}%`
                                }
                            </small>
                        </td>
                        <td className={`text-center ${(info.porcentage7d > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage7d === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage7d.toFixed(1))}%`
                                }
                            </small>
                        </td>
                        <td className={`text-center ${(info.porcentage14d > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage14d === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage14d.toFixed(1))}%`
                                }
                            </small>
                        </td>
                        <td className={`text-center ${(info.porcentage30d > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage30d === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage30d.toFixed(1))}%`
                                }
                            </small>
                        </td>
                        <td className={`text-center ${(info.porcentage1y > 0 ? 'text-success' : 'text-danger')}`}>
                            <small className="fw-semibold">
                                {
                                    info.porcentage1y === undefined ? 
                                    '' : `${new Intl.NumberFormat('en-EN').format(info.porcentage1y.toFixed(1))}%`
                                }
                            </small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
