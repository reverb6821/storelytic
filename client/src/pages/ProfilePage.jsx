import { FcDeployment } from 'react-icons/fc'
import ProfileCard from '../components/profile/ProfileCard'

const ProfilePage = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <FcDeployment className="w-8 h-8 mr-2" size={30} />
                    StoreLytic
                </div>
                <ProfileCard />
            </div>
        </section>
    )
}

export default ProfilePage