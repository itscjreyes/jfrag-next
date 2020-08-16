import Link from 'next/link';
import Button from '@material-ui/core/Button';
import AdminForm from '../Form/admin-form.component';
import useCurrentWidth from '../../Hooks/useCurrentWidth';

const AdminHeader = () => {
    const width = useCurrentWidth();
    const back = width > 767 ? 'Back to Site' : 'Back';
    const add = width > 767 ? 'Add Episode' : 'Add';
    
    return (
        <div className="admin-header">
            <div className="container">
                <Link href="/"><Button variant="outlined">{back}</Button></Link>
                <h1>Admin: Episodes</h1>
                <AdminForm
                    text={add}
                    title=""
                    slug=""
                    description=""
                    date=""
                    meta=""
                    embed=""
                    transcript=""
                />
            </div>
        </div>
    )
}

export default AdminHeader;