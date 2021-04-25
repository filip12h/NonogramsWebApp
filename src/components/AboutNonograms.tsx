import React from 'react';
import pic1 from '../pics/pic1.png';
import pic2 from '../pics/pic2.png';
import pic3 from '../pics/pic3.png';
import pic4 from '../pics/pic4.png';
import pic5 from '../pics/pic5.png';
import pic6 from '../pics/pic6.png';
import pic7 from '../pics/pic7.png';
import pic8 from '../pics/pic8.png';

const AboutNonograms: React.FC = () => {
    return (
        <div className="aboutNonograms">
            <h2>History</h2>
            <div>
                Nonograms, also known as Paint by Numbers, Picross, Griddlers, Pic-a-Pix, and
                various other names, are picture logic puzzles in which cells in a grid must be
                colored or left blank according to numbers at the side of the grid to reveal a
                hidden picture. For example, a clue of &quot;4 8 3&quot; would mean there are sets
                of four, eight, and three filled squares, in that order, with at least one blank
                square between successive sets.
            </div>
            <div>
                These puzzles are often black and white, describing a binary image, but they can
                also be colored. If colored, the number clues are also colored to indicate the color
                of the squares. Two differently colored numbers may or may not have a space in
                between them. For example, a black four followed by a red two could mean four black
                boxes, some empty spaces, and two red boxes, or it could simply mean four black
                boxes followed immediately by two red ones. Nonograms have no theoretical limits on
                size, and are not restricted to square layouts.
            </div>
            <div>
                Nonograms were named after a Japanese graphics editor Non Ishida, one of the two
                inventors of the puzzle, who in 1987 won a competition in Tokyo by designing grid
                pictures using skyscraper lights that were turned on or off. This led her to the
                idea of a puzzle based around filling in certain squares in a grid. Coincidentally,
                a professional Japanese puzzler named Tetsuya Nishio invented the same puzzles
                completely independently, and published them in another magazine.
            </div>
            <h2>How to solve Nonograms</h2>
            <div>
                <h3>Overlap</h3>
                You can use this method whenever a block is so big that wherever you put it in the
                row, some of the squares will always end up solid. If you put it at the far
                left-hand end (or top), and then put it at the far right-hand end (or bottom), the
                two positions of the block will overlap. <br />
                For example, consider a row of 10 blanks, with the clue 8.
                <br />
                <img src={pic1} alt={pic1} />
                <br />
                What can you tell about this row? <br />
                You know there&apos;s a block of 8 solids there somewhere, but you don&apos;t know
                where. What you do know, however, is that wherever the block goes, there are squares
                in the middle which will always be solid. Here are the different positions of the
                block, to make things clearer: <br />
                <img src={pic2} alt={pic2} />
                <br />
                So by looking at the overlap, we know that the six squares in the centre must be
                solids, and we can colour them in: <br />
                <img src={pic3} alt={pic3} />
                <br />
                Now, that&apos;s quite simple for a single block, all you have to do is count
                squares from each end, and colour in the overlap. But what if you have more than one
                block? Well, you look at the overlap in exactly the same way, you just have to be
                careful to count different numbers of squares from each end (so the overlap does not
                have to be symmetric). Let&apos;s look at the same row of 10 blanks, but with the
                clue &quot;5 2&quot;. If it was just 5, or just 2, then we wouldn&apos;t be able to
                tell anything just yet, as the blocks wouldn&apos;t overlap, but &quot;5 2&quot;
                will. Check out the picture, and look at the possible arrangements (there are 6 of
                them): <br />
                <img src={pic4} alt={pic4} />
                <br />
                The block of 5 will stretch at least 8 squares from the right (5 plus 2 plus at
                least one dot), and at least 5 squares from the left, which gives a 3-square
                overlap. However, the block of 2 has no overlap. Yet. So the squares which can be
                coloured in as solids are: <br />
                <img src={pic5} alt={pic5} />
                <br />
                Note that all the above applies exactly the same to columns as it does for rows.
                Also note that this method is the only way to start off the puzzle, as all the other
                methods rely on other squares already having been filled in on that row or column.
                <h3>Minimum range</h3>
                So now you&apos;ve got some of your grid filled in, using the overlaps, but what
                next? One very simple thing you can do is check the &apos;minimum range&apos; of the
                blocks. In other words, if a block is right up against the edge, how far must it
                stretch, at least? For example, suppose you have the following: <br />
                <img src={pic6} alt={pic6} />
                <br />
                You know that the block must stretch to at least 5 squares away from the edge, so if
                the second square is a solid, then so must the four next to it: <br />
                <img src={pic7} alt={pic7} /> <br />
                This can also be used to check how far a block stretches away from a dot, as well as
                from the edge of the puzzle.
                <h3>Maximum range</h3>
                Continuing with the previous example, we know there&apos;s just one block of five
                solids on this row, and we know where four of them are. So if we examine the maximum
                range of this block, we know where the solids definitely can&apos;t be. Now we can
                add our first dots! Just count five squares from the leftmost solid: <br />{' '}
                <img src={pic8} alt={pic8} />
                <br />
                Note that these dots can only be filled in if that was the last block on the line.
                If the clue was &quote;5 1&quote;, then they would all have to be left blank for
                now, as any of them could be solid. We&apos;ll revisit this later.
            </div>
        </div>
    );
};

export default AboutNonograms;
