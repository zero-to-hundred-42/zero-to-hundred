import React from 'react'
import { Button, Item, Container } from 'semantic-ui-react'
import "./info.css"

function InfoItemTitle(props) {
	return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

function GetItemGroup(props){
	let site_lists = [];
  const sites = props.sites;
	for (let i = 0; i < sites.length; i++)
	{
		site_lists.push(
      <Item>
        <Item.Content>
          <h4>{sites[i].desc}</h4>
          <Item.Description>{sites[i].site}</Item.Description>
        </Item.Content>
        {/* <Item.Extra> */}
          <a href={sites[i].link} target="_blank" rel="noreferrer">
            <Button primary floated="right">
              Open site
            </Button>
          </a>
        {/* </Item.Extra> */}
      </Item>,
    );
	}


	return <Item.Group divided>{site_lists}</Item.Group>;
}

function InfoList(props){
  return (
    <Container>
    <div className="info info-items">
      <InfoItemTitle classname="info-title" title={props.title} desc={props.desc} />
      <GetItemGroup classname="info-item" sites={props.sites} />
    </div>
    </Container>
  );
}

export default InfoList
