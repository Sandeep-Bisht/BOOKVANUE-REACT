import { Link, Outlet } from "react-router-dom"
import { Default } from "./default"
import '../../css/userDashboard.css'

const UserDashboard = () => {
    return (<>
        <Default>
            <div className="dashbord-usr">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-3">

                            <aside className="aside-usr">
                                <div className="aside-detail-box-usr">
                                    <div className="d-flex justify-content-center mb-2">
                                        <span className="aside-detail-box-icon-usr">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9881 5.64987C13.9881 5.82174 13.9764 5.99362 13.9549 6.16354C13.9647 6.09518 13.9745 6.02487 13.9823 5.95651C13.9354 6.29635 13.8455 6.62643 13.7147 6.94284C13.7401 6.88034 13.7674 6.81784 13.7928 6.75534C13.662 7.06393 13.494 7.35299 13.2889 7.61862L13.412 7.46041C13.2088 7.72213 12.9725 7.95846 12.7108 8.16159L12.869 8.03854C12.6034 8.24166 12.3143 8.41159 12.0057 8.54245C12.0682 8.51706 12.1307 8.48971 12.1932 8.46432C11.8768 8.59518 11.5467 8.68502 11.2069 8.7319C11.2752 8.72213 11.3456 8.71237 11.4139 8.70455C11.0721 8.74948 10.7284 8.74948 10.3866 8.70455C10.4549 8.71432 10.5252 8.72409 10.5936 8.7319C10.2538 8.68502 9.92368 8.59518 9.60727 8.46432C9.66977 8.48971 9.73227 8.51706 9.79477 8.54245C9.48618 8.41159 9.19711 8.24362 8.93149 8.03854L9.08969 8.16159C8.82797 7.95846 8.59164 7.72213 8.38852 7.46041L8.51157 7.61862C8.30844 7.35299 8.13852 7.06393 8.00766 6.75534C8.03305 6.81784 8.06039 6.88034 8.08578 6.94284C7.95493 6.62643 7.86508 6.29635 7.81821 5.95651C7.82797 6.02487 7.83774 6.09518 7.84555 6.16354C7.80063 5.82174 7.80063 5.47799 7.84555 5.1362C7.83578 5.20456 7.82602 5.27487 7.81821 5.34323C7.86508 5.00338 7.95493 4.67331 8.08578 4.3569C8.06039 4.4194 8.03305 4.4819 8.00766 4.5444C8.13852 4.23581 8.30649 3.94674 8.51157 3.68112L8.38852 3.83932C8.59164 3.5776 8.82797 3.34127 9.08969 3.13815L8.93149 3.2612C9.19711 3.05807 9.48618 2.88815 9.79477 2.75729C9.73227 2.78268 9.66977 2.81002 9.60727 2.83541C9.92368 2.70456 10.2538 2.61471 10.5936 2.56784C10.5252 2.5776 10.4549 2.58737 10.3866 2.59518C10.7284 2.55026 11.0721 2.55026 11.4139 2.59518C11.3456 2.58541 11.2752 2.57565 11.2069 2.56784C11.5467 2.61471 11.8768 2.70456 12.1932 2.83541C12.1307 2.81002 12.0682 2.78268 12.0057 2.75729C12.3143 2.88815 12.6034 3.05612 12.869 3.2612L12.7108 3.13815C12.9725 3.34127 13.2088 3.5776 13.412 3.83932L13.2889 3.68112C13.492 3.94674 13.662 4.23581 13.7928 4.5444C13.7674 4.4819 13.7401 4.4194 13.7147 4.3569C13.8455 4.67331 13.9354 5.00338 13.9823 5.34323C13.9725 5.27487 13.9627 5.20456 13.9549 5.1362C13.9764 5.30612 13.9862 5.47799 13.9881 5.64987C13.9901 6.05807 14.3455 6.45065 14.7694 6.43112C15.1913 6.41159 15.5526 6.08737 15.5506 5.64987C15.5467 4.71432 15.2655 3.75729 14.7147 2.99557C14.5663 2.79049 14.408 2.58932 14.2323 2.40768C14.0545 2.22409 13.8592 2.06588 13.6561 1.91159C13.287 1.63034 12.8748 1.42331 12.4373 1.26315C10.6737 0.616665 8.54672 1.19284 7.35336 2.64596C7.1893 2.84518 7.03305 3.05221 6.90024 3.27487C6.76743 3.49557 6.66391 3.72995 6.56821 3.96823C6.38852 4.40963 6.29672 4.87838 6.25961 5.35299C6.18735 6.28268 6.42953 7.25338 6.91391 8.05026C7.38071 8.81979 8.08578 9.47995 8.91 9.85299C9.15219 9.96237 9.40024 10.0639 9.65805 10.1362C9.91391 10.2065 10.1737 10.2456 10.4373 10.2768C10.9178 10.3335 11.4081 10.2944 11.8827 10.1987C13.6854 9.83151 15.1952 8.27877 15.4745 6.45651C15.5155 6.19088 15.5467 5.92526 15.5467 5.65573C15.5487 5.24752 15.1854 4.85495 14.7655 4.87448C14.3436 4.88815 13.9881 5.21237 13.9881 5.64987ZM16.5799 17.8628H6.55844C6.11508 17.8628 5.67172 17.8667 5.22836 17.8628C5.17953 17.8628 5.13071 17.8589 5.08383 17.853C5.15219 17.8628 5.2225 17.8725 5.29086 17.8803C5.21274 17.8686 5.13852 17.8471 5.06625 17.8178C5.12875 17.8432 5.19125 17.8706 5.25375 17.896C5.17563 17.8628 5.10336 17.8198 5.035 17.7671L5.19321 17.8901C5.13461 17.8413 5.07993 17.7885 5.03305 17.7299L5.1561 17.8881C5.10336 17.8198 5.06235 17.7475 5.02719 17.6694C5.05258 17.7319 5.07993 17.7944 5.10532 17.8569C5.07602 17.7846 5.05649 17.7085 5.04282 17.6323C5.05258 17.7006 5.06235 17.771 5.07016 17.8393C5.03891 17.603 5.06039 17.353 5.06039 17.1147V16.2788C5.06039 16.0698 5.07211 15.8628 5.09946 15.6557C5.08969 15.7241 5.07993 15.7944 5.07211 15.8628C5.1268 15.4624 5.23227 15.0698 5.39047 14.6967C5.36508 14.7592 5.33774 14.8217 5.31235 14.8842C5.46469 14.5288 5.66 14.1948 5.89633 13.8881L5.77328 14.0464C6.00961 13.7436 6.2811 13.4702 6.58578 13.2339L6.42758 13.3569C6.73422 13.1206 7.06821 12.9253 7.42368 12.7729C7.36118 12.7983 7.29868 12.8256 7.23618 12.851C7.60922 12.6948 7.99985 12.5874 8.40219 12.5327C8.33383 12.5424 8.26352 12.5522 8.19516 12.56C8.48422 12.5229 8.77133 12.521 9.06235 12.521H12.6366C12.9588 12.521 13.2791 12.519 13.6014 12.56C13.533 12.5503 13.4627 12.5405 13.3944 12.5327C13.7948 12.5874 14.1873 12.6928 14.5604 12.851C14.4979 12.8256 14.4354 12.7983 14.3729 12.7729C14.7284 12.9253 15.0623 13.1206 15.369 13.3569L15.2108 13.2339C15.5135 13.4702 15.787 13.7417 16.0233 14.0464L15.9002 13.8881C16.1366 14.1948 16.3319 14.5288 16.4842 14.8842C16.4588 14.8217 16.4315 14.7592 16.4061 14.6967C16.5623 15.0698 16.6698 15.4604 16.7245 15.8628C16.7147 15.7944 16.7049 15.7241 16.6971 15.6557C16.7342 15.9506 16.7362 16.2436 16.7362 16.5405V17.5073C16.7362 17.6186 16.7401 17.7299 16.7264 17.8393C16.7362 17.771 16.7459 17.7006 16.7538 17.6323C16.742 17.7104 16.7205 17.7846 16.6913 17.8569C16.7166 17.7944 16.744 17.7319 16.7694 17.6694C16.7362 17.7475 16.6932 17.8198 16.6405 17.8881L16.7635 17.7299C16.7147 17.7885 16.662 17.8432 16.6034 17.8901L16.7616 17.7671C16.6932 17.8198 16.6209 17.8608 16.5428 17.896C16.6053 17.8706 16.6678 17.8432 16.7303 17.8178C16.658 17.8471 16.5819 17.8667 16.5057 17.8803C16.5741 17.8706 16.6444 17.8608 16.7127 17.853C16.6698 17.8589 16.6248 17.8608 16.5799 17.8628C16.3788 17.8647 16.1717 17.9487 16.0272 18.0913C15.8924 18.226 15.7889 18.4487 15.7987 18.644C15.8182 19.062 16.1424 19.4311 16.5799 19.4253C17.3397 19.4135 18.0077 18.9174 18.2303 18.1889C18.3182 17.8999 18.2987 17.5893 18.2987 17.2924C18.2987 16.6128 18.3202 15.9389 18.203 15.2651C18.0311 14.2788 17.535 13.351 16.8553 12.6225C16.1756 11.894 15.2616 11.3589 14.2948 11.1206C13.7401 10.9839 13.1815 10.9624 12.6151 10.9624H9.15024C8.57016 10.9624 7.99399 10.9897 7.42953 11.1401C6.47055 11.394 5.56821 11.935 4.90219 12.6694C4.23032 13.4096 3.74399 14.3393 3.58578 15.3315C3.48032 15.9975 3.5018 16.6655 3.5018 17.3374C3.5018 17.646 3.48422 17.9682 3.59555 18.2631C3.74008 18.6421 3.97055 18.9409 4.30844 19.1655C4.57211 19.3393 4.9061 19.4233 5.2186 19.4272C5.37094 19.4292 5.52328 19.4272 5.67563 19.4272H16.5819C16.9901 19.4272 17.3827 19.0678 17.3631 18.646C17.3436 18.2202 17.0194 17.8628 16.5799 17.8628Z" fill="white" />
                                            </svg>

                                        </span>
                                    </div>

                                    <p className="upload-heading text-center">
                                        User Name
                                    </p>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/user/profile" className="upload-heading">
                                            <span className="me-2"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 14.5521V17.0854C2 17.3188 2.18333 17.5021 2.41667 17.5021H4.95C5.05833 17.5021 5.16667 17.4604 5.24167 17.3771L14.3417 8.28542L11.2167 5.16042L2.125 14.2521C2.04167 14.3354 2 14.4354 2 14.5521ZM16.7583 5.86875C17.0833 5.54375 17.0833 5.01875 16.7583 4.69375L14.8083 2.74375C14.4833 2.41875 13.9583 2.41875 13.6333 2.74375L12.1083 4.26875L15.2333 7.39375L16.7583 5.86875Z" fill="white" />
                                            </svg>
                                            </span>Edit your Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user/bookings" className="upload-heading">

                                            <span className="me-2">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 10.1C8.15823 10.1 8.3129 10.0531 8.44446 9.96518C8.57602 9.87727 8.67855 9.75233 8.7391 9.60615C8.79965 9.45997 8.8155 9.29911 8.78463 9.14393C8.75376 8.98874 8.67757 8.8462 8.56569 8.73431C8.4538 8.62243 8.31126 8.54624 8.15607 8.51537C8.00089 8.4845 7.84003 8.50035 7.69385 8.5609C7.54767 8.62145 7.42273 8.72398 7.33482 8.85554C7.24692 8.9871 7.2 9.14178 7.2 9.3C7.2 9.51217 7.28429 9.71566 7.43431 9.86569C7.58434 10.0157 7.78783 10.1 8 10.1ZM12 10.1C12.1582 10.1 12.3129 10.0531 12.4445 9.96518C12.576 9.87727 12.6786 9.75233 12.7391 9.60615C12.7997 9.45997 12.8155 9.29911 12.7846 9.14393C12.7538 8.98874 12.6776 8.8462 12.5657 8.73431C12.4538 8.62243 12.3113 8.54624 12.1561 8.51537C12.0009 8.4845 11.84 8.50035 11.6939 8.5609C11.5477 8.62145 11.4227 8.72398 11.3348 8.85554C11.2469 8.9871 11.2 9.14178 11.2 9.3C11.2 9.51217 11.2843 9.71566 11.4343 9.86569C11.5843 10.0157 11.7878 10.1 12 10.1ZM8 13.3C8.15823 13.3 8.3129 13.2531 8.44446 13.1652C8.57602 13.0773 8.67855 12.9523 8.7391 12.8061C8.79965 12.66 8.8155 12.4991 8.78463 12.3439C8.75376 12.1887 8.67757 12.0462 8.56569 11.9343C8.4538 11.8224 8.31126 11.7462 8.15607 11.7154C8.00089 11.6845 7.84003 11.7003 7.69385 11.7609C7.54767 11.8214 7.42273 11.924 7.33482 12.0555C7.24692 12.1871 7.2 12.3418 7.2 12.5C7.2 12.7122 7.28429 12.9157 7.43431 13.0657C7.58434 13.2157 7.78783 13.3 8 13.3ZM12 13.3C12.1582 13.3 12.3129 13.2531 12.4445 13.1652C12.576 13.0773 12.6786 12.9523 12.7391 12.8061C12.7997 12.66 12.8155 12.4991 12.7846 12.3439C12.7538 12.1887 12.6776 12.0462 12.5657 11.9343C12.4538 11.8224 12.3113 11.7462 12.1561 11.7154C12.0009 11.6845 11.84 11.7003 11.6939 11.7609C11.5477 11.8214 11.4227 11.924 11.3348 12.0555C11.2469 12.1871 11.2 12.3418 11.2 12.5C11.2 12.7122 11.2843 12.9157 11.4343 13.0657C11.5843 13.2157 11.7878 13.3 12 13.3ZM4 10.1C4.15823 10.1 4.3129 10.0531 4.44446 9.96518C4.57602 9.87727 4.67855 9.75233 4.7391 9.60615C4.79965 9.45997 4.8155 9.29911 4.78463 9.14393C4.75376 8.98874 4.67757 8.8462 4.56569 8.73431C4.4538 8.62243 4.31126 8.54624 4.15607 8.51537C4.00089 8.4845 3.84003 8.50035 3.69385 8.5609C3.54767 8.62145 3.42273 8.72398 3.33482 8.85554C3.24692 8.9871 3.2 9.14178 3.2 9.3C3.2 9.51217 3.28429 9.71566 3.43431 9.86569C3.58434 10.0157 3.78783 10.1 4 10.1ZM13.6 2.1H12.8V1.3C12.8 1.08783 12.7157 0.884344 12.5657 0.734315C12.4157 0.584285 12.2122 0.5 12 0.5C11.7878 0.5 11.5843 0.584285 11.4343 0.734315C11.2843 0.884344 11.2 1.08783 11.2 1.3V2.1H4.8V1.3C4.8 1.08783 4.71571 0.884344 4.56569 0.734315C4.41566 0.584285 4.21217 0.5 4 0.5C3.78783 0.5 3.58434 0.584285 3.43431 0.734315C3.28429 0.884344 3.2 1.08783 3.2 1.3V2.1H2.4C1.76348 2.1 1.15303 2.35286 0.702944 2.80294C0.252856 3.25303 0 3.86348 0 4.5V14.1C0 14.7365 0.252856 15.347 0.702944 15.7971C1.15303 16.2471 1.76348 16.5 2.4 16.5H13.6C14.2365 16.5 14.847 16.2471 15.2971 15.7971C15.7471 15.347 16 14.7365 16 14.1V4.5C16 3.86348 15.7471 3.25303 15.2971 2.80294C14.847 2.35286 14.2365 2.1 13.6 2.1ZM14.4 14.1C14.4 14.3122 14.3157 14.5157 14.1657 14.6657C14.0157 14.8157 13.8122 14.9 13.6 14.9H2.4C2.18783 14.9 1.98434 14.8157 1.83431 14.6657C1.68429 14.5157 1.6 14.3122 1.6 14.1V6.9H14.4V14.1ZM14.4 5.3H1.6V4.5C1.6 4.28783 1.68429 4.08434 1.83431 3.93431C1.98434 3.78429 2.18783 3.7 2.4 3.7H13.6C13.8122 3.7 14.0157 3.78429 14.1657 3.93431C14.3157 4.08434 14.4 4.28783 14.4 4.5V5.3ZM4 13.3C4.15823 13.3 4.3129 13.2531 4.44446 13.1652C4.57602 13.0773 4.67855 12.9523 4.7391 12.8061C4.79965 12.66 4.8155 12.4991 4.78463 12.3439C4.75376 12.1887 4.67757 12.0462 4.56569 11.9343C4.4538 11.8224 4.31126 11.7462 4.15607 11.7154C4.00089 11.6845 3.84003 11.7003 3.69385 11.7609C3.54767 11.8214 3.42273 11.924 3.33482 12.0555C3.24692 12.1871 3.2 12.3418 3.2 12.5C3.2 12.7122 3.28429 12.9157 3.43431 13.0657C3.58434 13.2157 3.78783 13.3 4 13.3Z" fill="#282524" />
                                                </svg>

                                            </span> All Bookings</Link>
                                    </li>
                                </ul>
                            </aside>

                        </div>


                        <div className="col-9">
                            <div className="aside-outlet-wrapper-usr">
                            <Outlet />
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    </>)
}

export default UserDashboard