import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuHeader } from '../ui/DropdownMenu';
import './DropdownMenuShowcase.css';

// Example icons (replace with your preferred icon library)
const EditIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.7 7.3c.4-.4.4-1 0-1.4L10.1 4.3c-.4-.4-1-.4-1.4 0L4 8v2.5h2.5l5.2-3.2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const DuplicateIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.5 3.5h-7v9h7v-9z M10.5 3.5v-1h-7v9h2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ArchiveIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.5h12M5.5 2.5h5M4 5.5v7c0 .5.5 1 1 1h6c.5 0 1-.5 1-1v-7M6.5 8h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const MoveIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2.5v11M4 6.5l4-4 4 4M4 10.5l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const DeleteIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 3.5h-11M12 3.5v10c0 .5-.5 1-1 1H5c-.5 0-1-.5-1-1v-10M6.5 3.5v-1h3v1M6.5 6.5v5M9.5 6.5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// Example component to showcase the DropdownMenu
function DropdownMenuShowcase() {
  return (
    <div className="dropdown-showcase">
      <h2>DropdownMenu Example</h2>
      <div className="showcase-container">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="showcase-button">
              <span>Options</span>
              <span className="showcase-arrow">▾</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuHeader>Actions</DropdownMenuHeader>
            <DropdownMenuItem icon={<EditIcon />}>Edit</DropdownMenuItem>
            <DropdownMenuItem icon={<DuplicateIcon />}>Duplicate</DropdownMenuItem>
            <DropdownMenuItem icon={<ArchiveIcon />}>Archive</DropdownMenuItem>
            <DropdownMenuItem icon={<MoveIcon />}>Move</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem icon={<DeleteIcon />} className="text-danger">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  );
}

export default DropdownMenuShowcase;
