/**
 * Component: Add Photo
 */

import React, { useCallback, ChangeEvent, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import AddLogoBackground from '../../../assets/images/AddLogoBackground.png';

// Component styles
import { Container } from './styles';

interface IAddLogoProps {
    setSelectedFile(file: File | null): void;
    defaultFileName?: string;
    defaultFileURL?: string;
}

const AddLogo: React.FC<IAddLogoProps> = ({
    setSelectedFile,
    defaultFileName,
    defaultFileURL,
    ...rest
}) => {
    // Logo URL state
    const [imageURL, setImageURL] = useState('');

    // When exists a default file, update the image URL
    useEffect(() => {
        if(defaultFileName && defaultFileURL) {
            setImageURL(defaultFileURL);
        } else {
            setImageURL(AddLogoBackground);
        }
    }, [defaultFileName, defaultFileURL, setSelectedFile]);

    // Update logo selected file
    const handleSelectFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            // Getting file data
            const fileSelected = e.target.files[0];

            if(fileSelected) {
                // Update data from selected logo file
                setSelectedFile(fileSelected);

                // Update preview image URL
                setImageURL(URL.createObjectURL(fileSelected));
            }
        }
    }, [setSelectedFile]);

    return (
      <Container imageURL={imageURL || AddLogoBackground}>
        <div className="preview-image-show" />

        <label htmlFor="file-input">
          <FiPlus size={40} color="#FFFFFF" />

          <input
            data-testid="file-input"
            id="file-input"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleSelectFile}
            {...rest}
          />
        </label>
      </Container>
    );
}

export default AddLogo;