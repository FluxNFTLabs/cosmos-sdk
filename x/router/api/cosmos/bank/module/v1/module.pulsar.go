// Code generated by protoc-gen-go-pulsar. DO NOT EDIT.
package modulev1

import (
	_ "cosmossdk.io/x/router/api/cosmos/app/v1alpha1"
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	io "io"
	reflect "reflect"
	sync "sync"
)

var _ protoreflect.List = (*_Module_1_list)(nil)

type _Module_1_list struct {
	list *[]string
}

func (x *_Module_1_list) Len() int {
	if x.list == nil {
		return 0
	}
	return len(*x.list)
}

func (x *_Module_1_list) Get(i int) protoreflect.Value {
	return protoreflect.ValueOfString((*x.list)[i])
}

func (x *_Module_1_list) Set(i int, value protoreflect.Value) {
	valueUnwrapped := value.String()
	concreteValue := valueUnwrapped
	(*x.list)[i] = concreteValue
}

func (x *_Module_1_list) Append(value protoreflect.Value) {
	valueUnwrapped := value.String()
	concreteValue := valueUnwrapped
	*x.list = append(*x.list, concreteValue)
}

func (x *_Module_1_list) AppendMutable() protoreflect.Value {
	panic(fmt.Errorf("AppendMutable can not be called on message Module at list field BlockedModuleAccountsOverride as it is not of Message kind"))
}

func (x *_Module_1_list) Truncate(n int) {
	*x.list = (*x.list)[:n]
}

func (x *_Module_1_list) NewElement() protoreflect.Value {
	v := ""
	return protoreflect.ValueOfString(v)
}

func (x *_Module_1_list) IsValid() bool {
	return x.list != nil
}

var (
	md_Module                                  protoreflect.MessageDescriptor
	fd_Module_blocked_module_accounts_override protoreflect.FieldDescriptor
	fd_Module_authority                        protoreflect.FieldDescriptor
)

func init() {
	file_cosmos_bank_module_v1_module_proto_init()
	md_Module = File_cosmos_bank_module_v1_module_proto.Messages().ByName("Module")
	fd_Module_blocked_module_accounts_override = md_Module.Fields().ByName("blocked_module_accounts_override")
	fd_Module_authority = md_Module.Fields().ByName("authority")
}

var _ protoreflect.Message = (*fastReflection_Module)(nil)

type fastReflection_Module Module

func (x *Module) ProtoReflect() protoreflect.Message {
	return (*fastReflection_Module)(x)
}

func (x *Module) slowProtoReflect() protoreflect.Message {
	mi := &file_cosmos_bank_module_v1_module_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_Module_messageType fastReflection_Module_messageType
var _ protoreflect.MessageType = fastReflection_Module_messageType{}

type fastReflection_Module_messageType struct{}

func (x fastReflection_Module_messageType) Zero() protoreflect.Message {
	return (*fastReflection_Module)(nil)
}
func (x fastReflection_Module_messageType) New() protoreflect.Message {
	return new(fastReflection_Module)
}
func (x fastReflection_Module_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_Module
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_Module) Descriptor() protoreflect.MessageDescriptor {
	return md_Module
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_Module) Type() protoreflect.MessageType {
	return _fastReflection_Module_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_Module) New() protoreflect.Message {
	return new(fastReflection_Module)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_Module) Interface() protoreflect.ProtoMessage {
	return (*Module)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_Module) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if len(x.BlockedModuleAccountsOverride) != 0 {
		value := protoreflect.ValueOfList(&_Module_1_list{list: &x.BlockedModuleAccountsOverride})
		if !f(fd_Module_blocked_module_accounts_override, value) {
			return
		}
	}
	if x.Authority != "" {
		value := protoreflect.ValueOfString(x.Authority)
		if !f(fd_Module_authority, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_Module) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		return len(x.BlockedModuleAccountsOverride) != 0
	case "cosmos.bank.module.v1.Module.authority":
		return x.Authority != ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Module) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		x.BlockedModuleAccountsOverride = nil
	case "cosmos.bank.module.v1.Module.authority":
		x.Authority = ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_Module) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		if len(x.BlockedModuleAccountsOverride) == 0 {
			return protoreflect.ValueOfList(&_Module_1_list{})
		}
		listValue := &_Module_1_list{list: &x.BlockedModuleAccountsOverride}
		return protoreflect.ValueOfList(listValue)
	case "cosmos.bank.module.v1.Module.authority":
		value := x.Authority
		return protoreflect.ValueOfString(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Module) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		lv := value.List()
		clv := lv.(*_Module_1_list)
		x.BlockedModuleAccountsOverride = *clv.list
	case "cosmos.bank.module.v1.Module.authority":
		x.Authority = value.Interface().(string)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Module) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		if x.BlockedModuleAccountsOverride == nil {
			x.BlockedModuleAccountsOverride = []string{}
		}
		value := &_Module_1_list{list: &x.BlockedModuleAccountsOverride}
		return protoreflect.ValueOfList(value)
	case "cosmos.bank.module.v1.Module.authority":
		panic(fmt.Errorf("field authority of message cosmos.bank.module.v1.Module is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_Module) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.bank.module.v1.Module.blocked_module_accounts_override":
		list := []string{}
		return protoreflect.ValueOfList(&_Module_1_list{list: &list})
	case "cosmos.bank.module.v1.Module.authority":
		return protoreflect.ValueOfString("")
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.bank.module.v1.Module"))
		}
		panic(fmt.Errorf("message cosmos.bank.module.v1.Module does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_Module) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in cosmos.bank.module.v1.Module", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_Module) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Module) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_Module) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_Module) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*Module)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		if len(x.BlockedModuleAccountsOverride) > 0 {
			for _, s := range x.BlockedModuleAccountsOverride {
				l = len(s)
				n += 1 + l + runtime.Sov(uint64(l))
			}
		}
		l = len(x.Authority)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*Module)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if len(x.Authority) > 0 {
			i -= len(x.Authority)
			copy(dAtA[i:], x.Authority)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Authority)))
			i--
			dAtA[i] = 0x12
		}
		if len(x.BlockedModuleAccountsOverride) > 0 {
			for iNdEx := len(x.BlockedModuleAccountsOverride) - 1; iNdEx >= 0; iNdEx-- {
				i -= len(x.BlockedModuleAccountsOverride[iNdEx])
				copy(dAtA[i:], x.BlockedModuleAccountsOverride[iNdEx])
				i = runtime.EncodeVarint(dAtA, i, uint64(len(x.BlockedModuleAccountsOverride[iNdEx])))
				i--
				dAtA[i] = 0xa
			}
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*Module)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Module: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Module: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field BlockedModuleAccountsOverride", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.BlockedModuleAccountsOverride = append(x.BlockedModuleAccountsOverride, string(dAtA[iNdEx:postIndex]))
				iNdEx = postIndex
			case 2:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Authority", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Authority = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: cosmos/bank/module/v1/module.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Module is the config object of the bank module.
type Module struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// blocked_module_accounts configures exceptional module accounts which should be blocked from receiving funds.
	// If left empty it defaults to the list of account names supplied in the auth module configuration as
	// module_account_permissions
	BlockedModuleAccountsOverride []string `protobuf:"bytes,1,rep,name=blocked_module_accounts_override,json=blockedModuleAccountsOverride,proto3" json:"blocked_module_accounts_override,omitempty"`
	// authority defines the custom module authority. If not set, defaults to the governance module.
	Authority string `protobuf:"bytes,2,opt,name=authority,proto3" json:"authority,omitempty"`
}

func (x *Module) Reset() {
	*x = Module{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_bank_module_v1_module_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Module) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Module) ProtoMessage() {}

// Deprecated: Use Module.ProtoReflect.Descriptor instead.
func (*Module) Descriptor() ([]byte, []int) {
	return file_cosmos_bank_module_v1_module_proto_rawDescGZIP(), []int{0}
}

func (x *Module) GetBlockedModuleAccountsOverride() []string {
	if x != nil {
		return x.BlockedModuleAccountsOverride
	}
	return nil
}

func (x *Module) GetAuthority() string {
	if x != nil {
		return x.Authority
	}
	return ""
}

var File_cosmos_bank_module_v1_module_proto protoreflect.FileDescriptor

var file_cosmos_bank_module_v1_module_proto_rawDesc = []byte{
	0x0a, 0x22, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x62, 0x61, 0x6e, 0x6b, 0x2f, 0x6d, 0x6f,
	0x64, 0x75, 0x6c, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x62, 0x61, 0x6e,
	0x6b, 0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x63, 0x6f, 0x73,
	0x6d, 0x6f, 0x73, 0x2f, 0x61, 0x70, 0x70, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9c, 0x01,
	0x0a, 0x06, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x12, 0x47, 0x0a, 0x20, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x65, 0x64, 0x5f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x5f, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64, 0x65, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x1d, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x65, 0x64, 0x4d, 0x6f, 0x64, 0x75, 0x6c,
	0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x4f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64,
	0x65, 0x12, 0x1c, 0x0a, 0x09, 0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x74, 0x79, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x74, 0x79, 0x3a,
	0x2b, 0xba, 0xc0, 0x96, 0xda, 0x01, 0x25, 0x0a, 0x23, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x78, 0x2f, 0x62, 0x61, 0x6e, 0x6b, 0x42, 0xd9, 0x01, 0x0a,
	0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x62, 0x61, 0x6e, 0x6b,
	0x2e, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x0b, 0x4d, 0x6f, 0x64, 0x75,
	0x6c, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x38, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x73, 0x64, 0x6b, 0x2e, 0x69, 0x6f, 0x2f, 0x78, 0x2f, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x72,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x62, 0x61, 0x6e, 0x6b,
	0x2f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2f, 0x76, 0x31, 0x3b, 0x6d, 0x6f, 0x64, 0x75, 0x6c,
	0x65, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x42, 0x4d, 0xaa, 0x02, 0x15, 0x43, 0x6f, 0x73, 0x6d,
	0x6f, 0x73, 0x2e, 0x42, 0x61, 0x6e, 0x6b, 0x2e, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x15, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x5c, 0x42, 0x61, 0x6e, 0x6b, 0x5c,
	0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x21, 0x43, 0x6f, 0x73, 0x6d,
	0x6f, 0x73, 0x5c, 0x42, 0x61, 0x6e, 0x6b, 0x5c, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5c, 0x56,
	0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x18,
	0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x3a, 0x3a, 0x42, 0x61, 0x6e, 0x6b, 0x3a, 0x3a, 0x4d, 0x6f,
	0x64, 0x75, 0x6c, 0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_cosmos_bank_module_v1_module_proto_rawDescOnce sync.Once
	file_cosmos_bank_module_v1_module_proto_rawDescData = file_cosmos_bank_module_v1_module_proto_rawDesc
)

func file_cosmos_bank_module_v1_module_proto_rawDescGZIP() []byte {
	file_cosmos_bank_module_v1_module_proto_rawDescOnce.Do(func() {
		file_cosmos_bank_module_v1_module_proto_rawDescData = protoimpl.X.CompressGZIP(file_cosmos_bank_module_v1_module_proto_rawDescData)
	})
	return file_cosmos_bank_module_v1_module_proto_rawDescData
}

var file_cosmos_bank_module_v1_module_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_cosmos_bank_module_v1_module_proto_goTypes = []interface{}{
	(*Module)(nil), // 0: cosmos.bank.module.v1.Module
}
var file_cosmos_bank_module_v1_module_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_cosmos_bank_module_v1_module_proto_init() }
func file_cosmos_bank_module_v1_module_proto_init() {
	if File_cosmos_bank_module_v1_module_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_cosmos_bank_module_v1_module_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Module); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_cosmos_bank_module_v1_module_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_cosmos_bank_module_v1_module_proto_goTypes,
		DependencyIndexes: file_cosmos_bank_module_v1_module_proto_depIdxs,
		MessageInfos:      file_cosmos_bank_module_v1_module_proto_msgTypes,
	}.Build()
	File_cosmos_bank_module_v1_module_proto = out.File
	file_cosmos_bank_module_v1_module_proto_rawDesc = nil
	file_cosmos_bank_module_v1_module_proto_goTypes = nil
	file_cosmos_bank_module_v1_module_proto_depIdxs = nil
}
