import PropTypes from "prop-types";

function ProfileContainer({children}) {
    return <section className="flex flex-col items-center w-full px-4 py-2">
        {children}
    </section>
}

ProfileContainer.propTypes = {
    children: PropTypes.node
}

export default ProfileContainer;