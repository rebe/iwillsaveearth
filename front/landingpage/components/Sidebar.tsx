import * as React from 'react';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { MouseEvent } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface SidebarProps {
  archives: Array<{
    url: string;
    title: string;
    linkId: number;
  }>;
  linkCallback: (index: number) => void;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

interface ContextArchive {
  linkId: number;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title } = props;
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contextarchive = event.currentTarget.getAttribute('data-context') as unknown as ContextArchive;
    console.log("cArch", contextarchive, typeof contextarchive);
    const index = Number(contextarchive);
    if (!Number.isNaN(index)) {
      props.linkCallback(index);
    }
  };
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} data-context={archive.linkId} onClick={handleLinkClick} >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
