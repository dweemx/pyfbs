// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace Dim {
    export class UByteArray {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns UByteArray
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): UByteArray {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param UByteArray= obj
         * @returns UByteArray
         */
        static getRootAsUByteArray(bb: flatbuffers.ByteBuffer, obj?: UByteArray): UByteArray {
            return (obj || new UByteArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param number index
         * @returns number
         */
        data(index: number): number | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
        }

        /**
         * @returns number
         */
        dataLength(): number {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
        }

        /**
         * @returns Uint8Array
         */
        dataArray(): Uint8Array | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? new Uint8Array(
                      this.bb!.bytes().buffer,
                      this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                      this.bb!.__vector_len(this.bb_pos + offset)
                  )
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startUByteArray(builder: flatbuffers.Builder) {
            builder.startObject(1);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset dataOffset
         */
        static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, dataOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param Array.<number> data
         * @returns flatbuffers.Offset
         */
        static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
            builder.startVector(1, data.length, 1);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addInt8(data[i]);
            }
            return builder.endVector();
        }

        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startDataVector(builder: flatbuffers.Builder, numElems: number) {
            builder.startVector(1, numElems, 1);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endUByteArray(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createUByteArray(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset): flatbuffers.Offset {
            UByteArray.startUByteArray(builder);
            UByteArray.addData(builder, dataOffset);
            return UByteArray.endUByteArray(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class Float32bArray {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Float32bArray
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Float32bArray {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Float32bArray= obj
         * @returns Float32bArray
         */
        static getRootAsFloat32bArray(bb: flatbuffers.ByteBuffer, obj?: Float32bArray): Float32bArray {
            return (obj || new Float32bArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param number index
         * @returns number
         */
        data(index: number): number | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
        }

        /**
         * @returns number
         */
        dataLength(): number {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
        }

        /**
         * @returns Float32Array
         */
        dataArray(): Float32Array | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? new Float32Array(
                      this.bb!.bytes().buffer,
                      this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                      this.bb!.__vector_len(this.bb_pos + offset)
                  )
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startFloat32bArray(builder: flatbuffers.Builder) {
            builder.startObject(1);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset dataOffset
         */
        static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, dataOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param Array.<number> data
         * @returns flatbuffers.Offset
         */
        static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
            builder.startVector(4, data.length, 4);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addFloat32(data[i]);
            }
            return builder.endVector();
        }

        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startDataVector(builder: flatbuffers.Builder, numElems: number) {
            builder.startVector(4, numElems, 4);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endFloat32bArray(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createFloat32bArray(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset): flatbuffers.Offset {
            Float32bArray.startFloat32bArray(builder);
            Float32bArray.addData(builder, dataOffset);
            return Float32bArray.endFloat32bArray(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class UInt32bArray {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns UInt32bArray
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): UInt32bArray {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param UInt32bArray= obj
         * @returns UInt32bArray
         */
        static getRootAsUInt32bArray(bb: flatbuffers.ByteBuffer, obj?: UInt32bArray): UInt32bArray {
            return (obj || new UInt32bArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param number index
         * @returns number
         */
        data(index: number): number | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
        }

        /**
         * @returns number
         */
        dataLength(): number {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
        }

        /**
         * @returns Uint32Array
         */
        dataArray(): Uint32Array | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? new Uint32Array(
                      this.bb!.bytes().buffer,
                      this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                      this.bb!.__vector_len(this.bb_pos + offset)
                  )
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startUInt32bArray(builder: flatbuffers.Builder) {
            builder.startObject(1);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset dataOffset
         */
        static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, dataOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param Array.<number> data
         * @returns flatbuffers.Offset
         */
        static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
            builder.startVector(4, data.length, 4);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addInt32(data[i]);
            }
            return builder.endVector();
        }

        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startDataVector(builder: flatbuffers.Builder, numElems: number) {
            builder.startVector(4, numElems, 4);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endUInt32bArray(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createUInt32bArray(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset): flatbuffers.Offset {
            UInt32bArray.startUInt32bArray(builder);
            UInt32bArray.addData(builder, dataOffset);
            return UInt32bArray.endUInt32bArray(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class LabeledIndexSet {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns LabeledIndexSet
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): LabeledIndexSet {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param LabeledIndexSet= obj
         * @returns LabeledIndexSet
         */
        static getRootAsLabeledIndexSet(bb: flatbuffers.ByteBuffer, obj?: LabeledIndexSet): LabeledIndexSet {
            return (obj || new LabeledIndexSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        name(optionalEncoding?: any): string | Uint8Array | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
        }

        /**
         * @param Dim.UInt32bArray= obj
         * @returns Dim.UInt32bArray|null
         */
        indices(obj?: Dim.UInt32bArray): Dim.UInt32bArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset
                ? (obj || new Dim.UInt32bArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startLabeledIndexSet(builder: flatbuffers.Builder) {
            builder.startObject(2);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, nameOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset indicesOffset
         */
        static addIndices(builder: flatbuffers.Builder, indicesOffset: flatbuffers.Offset) {
            builder.addFieldOffset(1, indicesOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endLabeledIndexSet(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createLabeledIndexSet(
            builder: flatbuffers.Builder,
            nameOffset: flatbuffers.Offset,
            indicesOffset: flatbuffers.Offset
        ): flatbuffers.Offset {
            LabeledIndexSet.startLabeledIndexSet(builder);
            LabeledIndexSet.addName(builder, nameOffset);
            LabeledIndexSet.addIndices(builder, indicesOffset);
            return LabeledIndexSet.endLabeledIndexSet(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class LabeledIndexSuperSet {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns LabeledIndexSuperSet
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): LabeledIndexSuperSet {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param LabeledIndexSuperSet= obj
         * @returns LabeledIndexSuperSet
         */
        static getRootAsLabeledIndexSuperSet(
            bb: flatbuffers.ByteBuffer,
            obj?: LabeledIndexSuperSet
        ): LabeledIndexSuperSet {
            return (obj || new LabeledIndexSuperSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        name(optionalEncoding?: any): string | Uint8Array | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
        }

        /**
         * @param number index
         * @param Dim.LabeledIndexSet= obj
         * @returns Dim.LabeledIndexSet
         */
        sets(index: number, obj?: Dim.LabeledIndexSet): Dim.LabeledIndexSet | null {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset
                ? (obj || new Dim.LabeledIndexSet()).__init(
                      this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4),
                      this.bb!
                  )
                : null;
        }

        /**
         * @returns number
         */
        setsLength(): number {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startLabeledIndexSuperSet(builder: flatbuffers.Builder) {
            builder.startObject(2);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, nameOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset setsOffset
         */
        static addSets(builder: flatbuffers.Builder, setsOffset: flatbuffers.Offset) {
            builder.addFieldOffset(1, setsOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
            builder.startVector(4, data.length, 4);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addOffset(data[i]);
            }
            return builder.endVector();
        }

        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startSetsVector(builder: flatbuffers.Builder, numElems: number) {
            builder.startVector(4, numElems, 4);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endLabeledIndexSuperSet(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createLabeledIndexSuperSet(
            builder: flatbuffers.Builder,
            nameOffset: flatbuffers.Offset,
            setsOffset: flatbuffers.Offset
        ): flatbuffers.Offset {
            LabeledIndexSuperSet.startLabeledIndexSuperSet(builder);
            LabeledIndexSuperSet.addName(builder, nameOffset);
            LabeledIndexSuperSet.addSets(builder, setsOffset);
            return LabeledIndexSuperSet.endLabeledIndexSuperSet(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class Coordinates2D {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Coordinates2D
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Coordinates2D {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Coordinates2D= obj
         * @returns Coordinates2D
         */
        static getRootAsCoordinates2D(bb: flatbuffers.ByteBuffer, obj?: Coordinates2D): Coordinates2D {
            return (obj || new Coordinates2D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param Dim.Float32bArray= obj
         * @returns Dim.Float32bArray|null
         */
        x(obj?: Dim.Float32bArray): Dim.Float32bArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? (obj || new Dim.Float32bArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.Float32bArray= obj
         * @returns Dim.Float32bArray|null
         */
        y(obj?: Dim.Float32bArray): Dim.Float32bArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset
                ? (obj || new Dim.Float32bArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startCoordinates2D(builder: flatbuffers.Builder) {
            builder.startObject(2);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset xOffset
         */
        static addX(builder: flatbuffers.Builder, xOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, xOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset yOffset
         */
        static addY(builder: flatbuffers.Builder, yOffset: flatbuffers.Offset) {
            builder.addFieldOffset(1, yOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endCoordinates2D(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createCoordinates2D(
            builder: flatbuffers.Builder,
            xOffset: flatbuffers.Offset,
            yOffset: flatbuffers.Offset
        ): flatbuffers.Offset {
            Coordinates2D.startCoordinates2D(builder);
            Coordinates2D.addX(builder, xOffset);
            Coordinates2D.addY(builder, yOffset);
            return Coordinates2D.endCoordinates2D(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class RGBTripleArray {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RGBTripleArray
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RGBTripleArray {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RGBTripleArray= obj
         * @returns RGBTripleArray
         */
        static getRootAsRGBTripleArray(bb: flatbuffers.ByteBuffer, obj?: RGBTripleArray): RGBTripleArray {
            return (obj || new RGBTripleArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param Dim.UByteArray= obj
         * @returns Dim.UByteArray|null
         */
        r(obj?: Dim.UByteArray): Dim.UByteArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? (obj || new Dim.UByteArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.UByteArray= obj
         * @returns Dim.UByteArray|null
         */
        g(obj?: Dim.UByteArray): Dim.UByteArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset
                ? (obj || new Dim.UByteArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.UByteArray= obj
         * @returns Dim.UByteArray|null
         */
        b(obj?: Dim.UByteArray): Dim.UByteArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 8);
            return offset
                ? (obj || new Dim.UByteArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startRGBTripleArray(builder: flatbuffers.Builder) {
            builder.startObject(3);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rOffset
         */
        static addR(builder: flatbuffers.Builder, rOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, rOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset gOffset
         */
        static addG(builder: flatbuffers.Builder, gOffset: flatbuffers.Offset) {
            builder.addFieldOffset(1, gOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset bOffset
         */
        static addB(builder: flatbuffers.Builder, bOffset: flatbuffers.Offset) {
            builder.addFieldOffset(2, bOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRGBTripleArray(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createRGBTripleArray(
            builder: flatbuffers.Builder,
            rOffset: flatbuffers.Offset,
            gOffset: flatbuffers.Offset,
            bOffset: flatbuffers.Offset
        ): flatbuffers.Offset {
            RGBTripleArray.startRGBTripleArray(builder);
            RGBTripleArray.addR(builder, rOffset);
            RGBTripleArray.addG(builder, gOffset);
            RGBTripleArray.addB(builder, bOffset);
            return RGBTripleArray.endRGBTripleArray(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class ColorArray1D {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns ColorArray1D
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): ColorArray1D {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ColorArray1D= obj
         * @returns ColorArray1D
         */
        static getRootAsColorArray1D(bb: flatbuffers.ByteBuffer, obj?: ColorArray1D): ColorArray1D {
            return (obj || new ColorArray1D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param Dim.UByteArray= obj
         * @returns Dim.UByteArray|null
         */
        color(obj?: Dim.UByteArray): Dim.UByteArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? (obj || new Dim.UByteArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startColorArray1D(builder: flatbuffers.Builder) {
            builder.startObject(1);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset colorOffset
         */
        static addColor(builder: flatbuffers.Builder, colorOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, colorOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endColorArray1D(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        static createColorArray1D(builder: flatbuffers.Builder, colorOffset: flatbuffers.Offset): flatbuffers.Offset {
            ColorArray1D.startColorArray1D(builder);
            ColorArray1D.addColor(builder, colorOffset);
            return ColorArray1D.endColorArray1D(builder);
        }
    }
}
/**
 * @constructor
 */
export namespace Dim {
    export class Dim {
        bb: flatbuffers.ByteBuffer | null = null;

        bb_pos: number = 0;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Dim
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Dim {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }

        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Dim= obj
         * @returns Dim
         */
        static getRootAsDim(bb: flatbuffers.ByteBuffer, obj?: Dim): Dim {
            return (obj || new Dim()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }

        /**
         * @param Dim.UByteArray= obj
         * @returns Dim.UByteArray|null
         */
        ubyteArray(obj?: Dim.UByteArray): Dim.UByteArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 4);
            return offset
                ? (obj || new Dim.UByteArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.Float32bArray= obj
         * @returns Dim.Float32bArray|null
         */
        float32bArray(obj?: Dim.Float32bArray): Dim.Float32bArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 6);
            return offset
                ? (obj || new Dim.Float32bArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.Coordinates2D= obj
         * @returns Dim.Coordinates2D|null
         */
        coordinates2d(obj?: Dim.Coordinates2D): Dim.Coordinates2D | null {
            var offset = this.bb!.__offset(this.bb_pos, 8);
            return offset
                ? (obj || new Dim.Coordinates2D()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.ColorArray1D= obj
         * @returns Dim.ColorArray1D|null
         */
        colorArray1d(obj?: Dim.ColorArray1D): Dim.ColorArray1D | null {
            var offset = this.bb!.__offset(this.bb_pos, 10);
            return offset
                ? (obj || new Dim.ColorArray1D()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param Dim.RGBTripleArray= obj
         * @returns Dim.RGBTripleArray|null
         */
        rgbTripleArray(obj?: Dim.RGBTripleArray): Dim.RGBTripleArray | null {
            var offset = this.bb!.__offset(this.bb_pos, 12);
            return offset
                ? (obj || new Dim.RGBTripleArray()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!)
                : null;
        }

        /**
         * @param flatbuffers.Builder builder
         */
        static startDim(builder: flatbuffers.Builder) {
            builder.startObject(5);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset ubyteArrayOffset
         */
        static addUbyteArray(builder: flatbuffers.Builder, ubyteArrayOffset: flatbuffers.Offset) {
            builder.addFieldOffset(0, ubyteArrayOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset float32bArrayOffset
         */
        static addFloat32bArray(builder: flatbuffers.Builder, float32bArrayOffset: flatbuffers.Offset) {
            builder.addFieldOffset(1, float32bArrayOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset coordinates2dOffset
         */
        static addCoordinates2d(builder: flatbuffers.Builder, coordinates2dOffset: flatbuffers.Offset) {
            builder.addFieldOffset(2, coordinates2dOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset colorArray1dOffset
         */
        static addColorArray1d(builder: flatbuffers.Builder, colorArray1dOffset: flatbuffers.Offset) {
            builder.addFieldOffset(3, colorArray1dOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rgbTripleArrayOffset
         */
        static addRgbTripleArray(builder: flatbuffers.Builder, rgbTripleArrayOffset: flatbuffers.Offset) {
            builder.addFieldOffset(4, rgbTripleArrayOffset, 0);
        }

        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDim(builder: flatbuffers.Builder): flatbuffers.Offset {
            var offset = builder.endObject();
            return offset;
        }

        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishDimBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
            builder.finish(offset);
        }

        static createDim(
            builder: flatbuffers.Builder,
            ubyteArrayOffset: flatbuffers.Offset,
            float32bArrayOffset: flatbuffers.Offset,
            coordinates2dOffset: flatbuffers.Offset,
            colorArray1dOffset: flatbuffers.Offset,
            rgbTripleArrayOffset: flatbuffers.Offset
        ): flatbuffers.Offset {
            Dim.startDim(builder);
            Dim.addUbyteArray(builder, ubyteArrayOffset);
            Dim.addFloat32bArray(builder, float32bArrayOffset);
            Dim.addCoordinates2d(builder, coordinates2dOffset);
            Dim.addColorArray1d(builder, colorArray1dOffset);
            Dim.addRgbTripleArray(builder, rgbTripleArrayOffset);
            return Dim.endDim(builder);
        }
    }
}
