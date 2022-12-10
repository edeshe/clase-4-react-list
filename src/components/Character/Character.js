import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import props from "./props";

const Character = ({id, name, image, episode}) => {
    return (
        <Card>
            <Link to={`/characters/${id}`}>
                <CardBody>
                <Image
                    src={image}
                    alt={name}
                    borderRadius='lg'
                    />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                </Stack>
                </CardBody>
                <Divider />
            </Link>
        </Card>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default Character;