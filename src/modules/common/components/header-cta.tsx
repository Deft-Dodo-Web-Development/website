import { Button } from "./button";

const HeaderCTA: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <Button icon="ArrowUpRight" href="/contact">
      Contact
    </Button>
  </div>
);

export { HeaderCTA };
