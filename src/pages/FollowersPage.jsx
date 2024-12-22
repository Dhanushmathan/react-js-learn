import FollowerCard from '../components/FollowerCard';
import TeamFolloers from '../data/followers.json';

const FollowersPage = () => {

    console.log(TeamFolloers);

    return (
        <div className='m-10'>
            <h1 className='text-2xl font-semibold mb-5'>My Battle Squad!!!</h1>
            <div className='grid grid-cols-4 gap-x-5'>
                {
                    TeamFolloers.characters.map((team) => {
                        return <FollowerCard key={team.id} name={team.name} role={team.rank} image={team.image} />
                    })
                }
            </div>
        </div>
    )
}

export default FollowersPage;