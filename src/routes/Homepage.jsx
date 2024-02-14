import ProfileContainer from "../components/Profile/ProfileContainer";
import BlobProfileImage from "../components/Profile/BlobProfileImage";
import ProfileInfos from "../components/Profile/ProfilesInfos";

function HomePage() {
    return <div className="flex flex-col w-full h-full md:flex-row-reverse">
    <aside className="max-w-none w-full border-b-4 border-b-proj-gray md:max-w-64 md:w-1/3 md:border-b-0 md:border-l-4 md:border-l-proj-gray">
        <ProfileContainer>
            <BlobProfileImage />
            <ProfileInfos />
        </ProfileContainer>
    </aside>
    <main className="flex-1">
        Main Content
    </main>
    </div>
}

export default HomePage;