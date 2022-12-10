import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";

import props from "./props";

const Character = ({id, name, image, episode}) => {
    return (
        <Card>
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
        </Card>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default Character;