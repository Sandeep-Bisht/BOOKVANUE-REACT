import '../../css/profile.css'

const Profile = () => {



    return (
        <>
            <section className='edit-profile-usr'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h4 class=" fw-bold ">Edit Profile</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <form>
                                <div className='row mt-lg-3'>
                                    <div className='col-lg-6'>
                                        <div className='form-row'>
                                            <label for="name" class="form-label">First Name</label>
                                            <input type="text" class="form-input"

                                                placeholder='Enter First Name'
                                            />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-row'>
                                            <label for="name" class="form-label">Last Name</label>
                                            <input type="text" class="form-input"

                                                placeholder='Enter Last Name'
                                            />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-row'>
                                            <label for="name" class="form-label">Phone No</label>
                                            <input type="text" class="form-input"

                                                placeholder='9548316146'
                                            />

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                    <div className='form-row'>
                                            <label for="name" class="form-label">Email</label>
                                            <input type="email" class="form-input"

                                                placeholder='Enter email'
                                            />

                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='profile-action-btn-wrapper-usr d-flex justify-content-end'>
                                        <button class="primary-btn border-0 reset me-3" type="button">Reset</button>
                                        <button class="primary-btn border-0" type="button">Save</button>
                                        </div>
                                    
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile


