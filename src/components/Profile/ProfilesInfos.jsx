function ProfileInfos() {
  return (
    <article className="w-full py-4 space-y-4 text-lg">
      <div className="w-fit mx-auto mb-6">
        <h2 className="inline text-center text-xl font-bold text-proj-purple before:content-['#'] dark:text-proj-green">
          UserName 123
        </h2>
        <div className="inline-block w-6 h-6 ml-4 rounded-full bg-proj-green"> </div>
      </div>
      <p><span className="text-lg font-bold text-proj-purple dark:text-proj-green">Nome: </span>Name and last name</p>

      <p><span className="text-lg font-bold text-proj-purple dark:text-proj-green">email: </span> useremail@gmail.com</p>

      <p><span className="text-lg font-bold text-proj-purple dark:text-proj-green">Completed Projects: </span>12</p>
    </article>
  );
}

export default ProfileInfos;
